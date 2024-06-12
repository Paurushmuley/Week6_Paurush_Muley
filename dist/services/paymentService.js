"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const payment_1 = __importDefault(require("../models/payment"));
const orderService_1 = __importDefault(require("./orderService"));
const uuid_1 = require("uuid");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// const constants = require('gocardless-nodejs/constants');
// const GoCardlessClient = require('gocardless-nodejs');
// Initialize the GoCardless client once
const gocardless = require("gocardless-nodejs");
const constants = require("gocardless-nodejs/constants");
const client = gocardless(
// We recommend storing your access token in an environment
// variable for security
'live_4tx1Mkbe9-2-_O4GECZpQPTcS8K9ycBvevkaboVF', 
// Change this to constants.Environments.Live when you're ready to go live
constants.Environments.Sandbox);
class PaymentService {
    processPayment(paymentData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { userId, bookId, amount } = paymentData;
                const listResponse = yield client.customers.list();
                const customers = listResponse.customers;
                console.log(customers);
                // Create a customer
                const customer = yield client.customers.create({
                    email: "user@example.com", // Replace with dynamic value
                    given_name: "Frank", // Replace with dynamic value
                    family_name: "Osborne", // Replace with dynamic value
                    address_line1: "27 Acer Road", // Replace with dynamic value
                    address_line2: "Apt 2", // Replace with dynamic value
                    city: "London", // Replace with dynamic value
                    postal_code: "E8 3GX", // Replace with dynamic value
                    country_code: "GB",
                    metadata: {
                        salesforce_id: (0, uuid_1.v4)()
                    }
                });
                // Create a customer bank account
                const customerBankAccount = yield client.customerBankAccounts.create({
                    account_number: "55779911", // Replace with dynamic value
                    branch_code: "200000", // Replace with dynamic value
                    account_holder_name: "Frank Osborne", // Replace with dynamic value
                    country_code: "GB",
                    links: {
                        customer: customer.id // Use created customer's ID
                    }
                });
                // Create a mandate
                const mandate = yield client.mandates.create({
                    scheme: "bacs",
                    metadata: {
                        contract: (0, uuid_1.v4)()
                    },
                    links: {
                        customer_bank_account: customerBankAccount.id, // Use created customer bank account's ID
                        creditor: "CR123" // Replace with actual creditor ID
                    }
                });
                // Create a payment using GoCardless client
                const payment = yield client.payments.create({
                    amount: amount * 100, // Amount in cents/pence
                    currency: "GBP",
                    charge_date: new Date().toISOString().split('T')[0], // Current date
                    reference: "BOOKSTORE_PAYMENT", // Adjust as necessary
                    metadata: {
                        order_dispatch_date: new Date().toISOString().split('T')[0] // Current date
                    },
                    links: {
                        mandate: mandate.id // Use created mandate's ID
                    }
                });
                // Save payment details to the database
                const paymentRecord = yield payment_1.default.create({
                    userId,
                    bookId,
                    amount,
                    status: payment.status,
                });
                // Create an order if payment is successful
                if (payment.status === 'pending_submission' || payment.status === 'submitted') {
                    yield orderService_1.default.createOrder({
                        userId,
                        bookId,
                        amount,
                        status: 'completed', // Assuming the order is completed upon successful payment
                    });
                }
                return paymentRecord;
            }
            catch (error) {
                console.error('Error processing payment:', error);
                throw new Error('Payment processing failed');
            }
        });
    }
    listPayments() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // List payments using GoCardless client
                const payments = yield client.payments.list({
                    limit: 3,
                    created_at: {
                        gt: '2020-01-01T17:01:06.000Z',
                    },
                });
                return payments;
            }
            catch (error) {
                console.error('Error listing payments:', error);
                throw new Error('Failed to list payments');
            }
        });
    }
    getPayment(paymentId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Get payment details using GoCardless client
                const payment = yield client.payments.find(paymentId);
                return payment;
            }
            catch (error) {
                console.error('Error fetching payment:', error);
                throw new Error('Failed to fetch payment');
            }
        });
    }
    updatePayment(paymentId, updateData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Update payment using GoCardless client
                const updatedPayment = yield client.payments.update(paymentId, updateData);
                return updatedPayment;
            }
            catch (error) {
                console.error('Error updating payment:', error);
                throw new Error('Failed to update payment');
            }
        });
    }
    cancelPayment(paymentId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Cancel payment using GoCardless client
                yield client.payments.cancel(paymentId);
                return 'Payment cancelled successfully';
            }
            catch (error) {
                console.error('Error cancelling payment:', error);
                throw new Error('Failed to cancel payment');
            }
        });
    }
}
exports.default = new PaymentService();
//# sourceMappingURL=paymentService.js.map
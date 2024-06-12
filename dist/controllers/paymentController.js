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
const paymentService_1 = __importDefault(require("../services/paymentService"));
class PaymentController {
    createPayment(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!req.user) {
                    return res.status(401).json({ error: 'Unauthorized' });
                }
                const paymentData = Object.assign(Object.assign({}, req.body), { userId: req.user.id, bookId: req.params.bookId });
                const payment = yield paymentService_1.default.processPayment(paymentData);
                res.status(201).json(payment);
            }
            catch (error) {
                res.status(500).json({ error: error });
            }
        });
    }
}
exports.default = new PaymentController();
//# sourceMappingURL=paymentController.js.map
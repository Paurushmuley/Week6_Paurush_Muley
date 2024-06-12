"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gocardless = require('gocardless-nodejs');
const constants = require('gocardless-nodejs/constants');
// Replace 'YOUR_GC_ACCESS_TOKEN' with your actual GoCardless access token
const accessToken = process.env.GOCARDLESS_ACCESS_TOKEN || 'mMqb0wce5FJJYrvJZAQ0ulln4jAHB57JpiQIxE8';
// Initialize the client for the sandbox environment
const client = gocardless(accessToken, constants.Environments.Sandbox, { raiseOnIdempotencyConflict: true });
exports.default = client;
//# sourceMappingURL=gocardless.js.map
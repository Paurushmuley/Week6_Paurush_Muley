"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const paymentController_1 = __importDefault(require("../../controllers/paymentController"));
const authMiddleware_1 = __importDefault(require("../../middleware/authMiddleware"));
const router = (0, express_1.Router)();
router.post('/orders', authMiddleware_1.default, paymentController_1.default.createPayment);
exports.default = router;
//# sourceMappingURL=index.js.map
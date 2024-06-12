"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const orderController_1 = __importDefault(require("../../controllers/orderController"));
const authMiddleware_1 = __importDefault(require("../../middleware/authMiddleware"));
const router = (0, express_1.Router)();
router.get('/orders/:id', authMiddleware_1.default, orderController_1.default.getOrderById);
exports.default = router;
//# sourceMappingURL=index.js.map
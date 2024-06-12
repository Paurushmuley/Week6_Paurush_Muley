"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ratingController_1 = __importDefault(require("../../controllers/ratingController"));
const authMiddleware_1 = __importDefault(require("../../middleware/authMiddleware"));
const router = (0, express_1.Router)();
router.get('/books/:bookId/ratings', ratingController_1.default.getRatingsByBookId);
router.post('/books/:bookId/ratings', authMiddleware_1.default, ratingController_1.default.createRating);
exports.default = router;
//# sourceMappingURL=index.js.map
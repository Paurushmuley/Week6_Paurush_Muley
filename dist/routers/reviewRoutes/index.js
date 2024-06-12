"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const reviewController_1 = __importDefault(require("../../controllers/reviewController"));
const authMiddleware_1 = __importDefault(require("../../middleware/authMiddleware"));
const router = (0, express_1.Router)();
router.get('/books/:bookId/reviews', reviewController_1.default.getReviewsByBookId);
router.post('/books/:bookId/reviews', authMiddleware_1.default, reviewController_1.default.createReview);
router.delete('/reviews/:id', authMiddleware_1.default, reviewController_1.default.deleteReview);
exports.default = router;
//# sourceMappingURL=index.js.map
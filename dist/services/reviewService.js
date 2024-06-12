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
const review_1 = __importDefault(require("../models/review"));
const user_1 = __importDefault(require("../models/user"));
const book_1 = __importDefault(require("../models/book"));
class ReviewService {
    getReviewsByBookId(bookId) {
        return __awaiter(this, void 0, void 0, function* () {
            return review_1.default.findAll({
                where: { bookId },
                include: [user_1.default, book_1.default],
            });
        });
    }
    createReview(reviewData) {
        return __awaiter(this, void 0, void 0, function* () {
            return review_1.default.create(reviewData);
        });
    }
    deleteReview(id, userId, isAdmin) {
        return __awaiter(this, void 0, void 0, function* () {
            const review = yield review_1.default.findByPk(id);
            if (review) {
                if (review.userId === userId || isAdmin) {
                    return review.destroy();
                }
                else {
                    throw new Error('Not authorized to delete this review');
                }
            }
            throw new Error('Review not found');
        });
    }
}
exports.default = new ReviewService();
//# sourceMappingURL=reviewService.js.map
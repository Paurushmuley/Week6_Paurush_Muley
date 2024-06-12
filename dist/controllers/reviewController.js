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
const reviewService_1 = __importDefault(require("../services/reviewService"));
class ReviewController {
    getReviewsByBookId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const reviews = yield reviewService_1.default.getReviewsByBookId(req.params.bookId);
                res.json(reviews);
            }
            catch (error) {
                res.status(500).json({ error: error });
            }
        });
    }
    createReview(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!req.user) {
                    return res.status(401).json({ error: 'Unauthorized' });
                }
                const reviewData = Object.assign(Object.assign({}, req.body), { userId: req.user.id, bookId: req.params.bookId });
                const review = yield reviewService_1.default.createReview(reviewData);
                res.status(201).json(review);
            }
            catch (error) {
                res.status(500).json({ error: error });
            }
        });
    }
    deleteReview(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!req.user) {
                    return res.status(401).json({ error: 'Unauthorized' });
                }
                yield reviewService_1.default.deleteReview(req.params.id, req.user.id, req.user.role === 'admin');
                res.status(204).send();
            }
            catch (error) {
                res.status(500).json({ error: error });
            }
        });
    }
}
exports.default = new ReviewController();
//# sourceMappingURL=reviewController.js.map
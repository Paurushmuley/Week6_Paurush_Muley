"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const bookController_1 = __importDefault(require("../../controllers/bookController"));
const authMiddleware_1 = __importDefault(require("../../middleware/authMiddleware"));
const router = (0, express_1.Router)();
router.get('/books', authMiddleware_1.default, bookController_1.default.getAllBooks);
router.get('/books/:id', authMiddleware_1.default, bookController_1.default.getBookById);
router.post('/books', authMiddleware_1.default, bookController_1.default.createBook);
router.put('/books/:id', authMiddleware_1.default, bookController_1.default.updateBook);
router.delete('/books/:id', authMiddleware_1.default, bookController_1.default.deleteBook);
exports.default = router;
//# sourceMappingURL=index.js.map
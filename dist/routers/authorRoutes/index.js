"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authorController_1 = __importDefault(require("../../controllers/authorController"));
const authMiddleware_1 = __importDefault(require("../../middleware/authMiddleware"));
const router = (0, express_1.Router)();
router.get('/authors', authMiddleware_1.default, authorController_1.default.getAllAuthors);
router.get('/authors/:id', authMiddleware_1.default, authorController_1.default.getAuthorById);
router.post('/authors', authMiddleware_1.default, authorController_1.default.createAuthor);
router.put('/authors/:id', authMiddleware_1.default, authorController_1.default.updateAuthor);
router.delete('/authors/:id', authMiddleware_1.default, authorController_1.default.deleteAuthor);
exports.default = router;
//# sourceMappingURL=index.js.map
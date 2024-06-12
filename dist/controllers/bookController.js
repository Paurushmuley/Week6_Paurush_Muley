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
const bookService_1 = __importDefault(require("../services/bookService"));
class BookController {
    getAllBooks(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const books = yield bookService_1.default.getAllBooks();
                res.json(books);
            }
            catch (error) {
                res.status(500).json({ error: error });
            }
        });
    }
    getBookById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const book = yield bookService_1.default.getBookById(req.params.id);
                if (book) {
                    res.json(book);
                }
                else {
                    res.status(404).json({ error: 'Book not found' });
                }
            }
            catch (error) {
                res.status(500).json({ error: error });
            }
        });
    }
    createBook(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const book = yield bookService_1.default.createBook(req.body);
                res.status(201).json(book);
            }
            catch (error) {
                res.status(500).json({ error: error });
            }
        });
    }
    updateBook(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const book = yield bookService_1.default.updateBook(req.params.id, req.body);
                res.json(book);
            }
            catch (error) {
                res.status(500).json({ error: error });
            }
        });
    }
    deleteBook(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield bookService_1.default.deleteBook(req.params.id);
                res.status(204).send();
            }
            catch (error) {
                res.status(500).json({ error: error });
            }
        });
    }
}
exports.default = new BookController();
//# sourceMappingURL=bookController.js.map
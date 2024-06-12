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
const authorService_1 = __importDefault(require("../services/authorService"));
class AuthorController {
    getAllAuthors(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const authors = yield authorService_1.default.getAllAuthors();
                res.json(authors);
            }
            catch (error) {
                res.status(500).json({ error: error });
            }
        });
    }
    getAuthorById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const author = yield authorService_1.default.getAuthorById(req.params.id);
                if (author) {
                    res.json(author);
                }
                else {
                    res.status(404).json({ error: 'Author not found' });
                }
            }
            catch (error) {
                res.status(500).json({ error: error });
            }
        });
    }
    createAuthor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const author = yield authorService_1.default.createAuthor(req.body);
                res.status(201).json(author);
            }
            catch (error) {
                res.status(500).json({ error: error });
            }
        });
    }
    updateAuthor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const author = yield authorService_1.default.updateAuthor(req.params.id, req.body);
                res.json(author);
            }
            catch (error) {
                res.status(500).json({ error: error });
            }
        });
    }
    deleteAuthor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield authorService_1.default.deleteAuthor(req.params.id);
                res.status(204).send();
            }
            catch (error) {
                res.status(500).json({ error: error });
            }
        });
    }
}
exports.default = new AuthorController();
//# sourceMappingURL=authorController.js.map
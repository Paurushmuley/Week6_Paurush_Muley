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
const author_1 = __importDefault(require("../models/author"));
class AuthorService {
    getAllAuthors() {
        return __awaiter(this, void 0, void 0, function* () {
            return author_1.default.findAll();
        });
    }
    getAuthorById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return author_1.default.findByPk(id);
        });
    }
    createAuthor(authorData) {
        return __awaiter(this, void 0, void 0, function* () {
            return author_1.default.create(authorData);
        });
    }
    updateAuthor(id, authorData) {
        return __awaiter(this, void 0, void 0, function* () {
            const author = yield author_1.default.findByPk(id);
            if (author) {
                return author.update(authorData);
            }
            throw new Error('Author not found');
        });
    }
    deleteAuthor(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const author = yield author_1.default.findByPk(id);
            if (author) {
                return author.destroy();
            }
            throw new Error('Author not found');
        });
    }
}
exports.default = new AuthorService();
//# sourceMappingURL=authorService.js.map
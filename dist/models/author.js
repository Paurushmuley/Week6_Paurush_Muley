"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../config/database"));
class Author extends sequelize_1.Model {
}
Author.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    bio: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true,
    },
    birthdate: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true,
    },
    isSystemUser: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
    },
}, {
    sequelize: database_1.default,
    tableName: 'authors',
});
exports.default = Author;
//# sourceMappingURL=author.js.map
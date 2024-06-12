"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const models_1 = __importDefault(require("./models"));
const dotenv_1 = __importDefault(require("dotenv"));
const auth_1 = __importDefault(require("./routers/auth"));
const bookRoutes_1 = __importDefault(require("./routers/bookRoutes"));
const authorRoutes_1 = __importDefault(require("./routers/authorRoutes"));
const reviewRoutes_1 = __importDefault(require("./routers/reviewRoutes"));
const ratingRoutes_1 = __importDefault(require("./routers/ratingRoutes"));
const orderRoutes_1 = __importDefault(require("./routers/orderRoutes"));
const paymentRoutes_1 = __importDefault(require("./routers/paymentRoutes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send('Invoice Management System API');
});
app.use('/auth', auth_1.default);
app.use('/book', bookRoutes_1.default);
app.use('/author', authorRoutes_1.default);
app.use('/review', reviewRoutes_1.default);
app.use('/rating', ratingRoutes_1.default);
app.use('/order', orderRoutes_1.default);
app.use('/payment', paymentRoutes_1.default);
models_1.default.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});
//# sourceMappingURL=app.js.map
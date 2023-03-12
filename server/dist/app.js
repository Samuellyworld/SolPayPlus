"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
// importing relevant module
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
// importing routes
const payment_router_1 = require("./routes/payment.router");
const rate_router_1 = require("./routes/rate.router");
const bill_router_1 = require("./routes/bill.router");
// start an express server
exports.app = (0, express_1.default)();
// middlewares
exports.app.use(express_1.default.json());
exports.app.use((0, morgan_1.default)('combined'));
exports.app.use((0, cors_1.default)());
//routes
exports.app.get('/', (req, res) => {
    res.json("Backend server is Live 👨🏼‍🍳");
});
// this is a mockup endpoint
//get all USDT conversion rate
exports.app.use('/payment', payment_router_1.paymentRouter);
exports.app.use('/rate', rate_router_1.rateRouter);
exports.app.use('/bill', bill_router_1.billRouter);
//# sourceMappingURL=app.js.map
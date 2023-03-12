"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.paymentRouter = void 0;
// importing relevant modules
const express_1 = __importDefault(require("express"));
const payment_controller_1 = require("../controllers/payment.controller");
// creating 'mock-up' payment route
exports.paymentRouter = express_1.default.Router();
// getting all USDT conversion rate
exports.paymentRouter.get('/', payment_controller_1.httpConvertUSDC);
// Initialize new payment.
exports.paymentRouter.post('/initialize', payment_controller_1.initializePayment);
// Validate a payment.
exports.paymentRouter.post('/validate', payment_controller_1.validatePayment);
//# sourceMappingURL=payment.router.js.map
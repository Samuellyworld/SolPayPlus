"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.billRouter = void 0;
// importing relevant modules
const express_1 = __importDefault(require("express"));
const bill_controller_1 = require("../controllers/bill.controller");
// creating bill route
exports.billRouter = express_1.default.Router();
//making bill payments
exports.billRouter.post('/', bill_controller_1.createBill);
// getting Bill Payments
exports.billRouter.post('/get-bills', bill_controller_1.getBillsPayment);
// getting Bill categories
exports.billRouter.get('/categories', bill_controller_1.getBillsCategories);
// getting Bill payment agencies
exports.billRouter.get('/payment-agencies', bill_controller_1.paymentAgencies);
// getting Bill payment agencies
exports.billRouter.get('/status/:reference', bill_controller_1.getStatus);
//getting amount for a Bill
exports.billRouter.post('/amount', bill_controller_1.amountToBePaid);
//validate services like DSTV smartcard no, Meter number etc.
exports.billRouter.post('/validate', bill_controller_1.validateBill);
//# sourceMappingURL=bill.router.js.map
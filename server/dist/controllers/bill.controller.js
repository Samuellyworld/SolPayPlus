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
exports.getBillsPayment = exports.validateBill = exports.createBill = exports.amountToBePaid = exports.paymentAgencies = exports.getStatus = exports.getBillsCategories = void 0;
const flutterwave_node_v3_1 = __importDefault(require("flutterwave-node-v3"));
const config_1 = require("../config/config");
const flw = new flutterwave_node_v3_1.default(config_1.defaultConfig.FLW_PUBLIC_KEY, config_1.defaultConfig.FLW_SECRET_KEY);
const getBillsCategories = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield flw.Bills.fetch_bills_Cat();
        res.status(200).json({
            data: response
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.getBillsCategories = getBillsCategories;
const getStatus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = {
            "reference": req.params.reference,
        };
        const response = yield flw.Bills.fetch_status(payload);
        res.status(200).json({
            data: response
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            error: {
                message: 'Couldnt fetch payment agencies'
            }
        });
    }
});
exports.getStatus = getStatus;
const paymentAgencies = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield flw.Bills.fetch_bills_agencies();
        res.status(200).json({
            data: response
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            error: {
                message: 'Couldnt fetch payment agencies'
            }
        });
    }
});
exports.paymentAgencies = paymentAgencies;
const createBill = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const response = yield flw.Bills.create_bill(payload);
        res.status(200).json({
            data: response
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            error: {
                message: 'Couldnt make Bill Payment'
            }
        });
    }
});
exports.createBill = createBill;
const validateBill = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const response = yield flw.Bills.validate(payload);
        res.status(200).json({
            data: response
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            error: {
                message: 'Couldnt Validate Customer'
            }
        });
    }
});
exports.validateBill = validateBill;
const getBillsPayment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const response = yield flw.Bills.fetch_bills(payload);
        res.status(200).json({
            data: response
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            error: {
                message: 'Couldnt get Bill Payments'
            }
        });
    }
});
exports.getBillsPayment = getBillsPayment;
const amountToBePaid = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const response = yield flw.Bills.amt_to_be_paid(payload);
        res.status(200).json({
            data: response
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            error: {
                message: 'Couldnt Resolve amount'
            }
        });
    }
});
exports.amountToBePaid = amountToBePaid;
//# sourceMappingURL=bill.controller.js.map
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
exports.validatePayment = exports.initializePayment = exports.httpConvertUSDC = void 0;
const web3_js_1 = require("@solana/web3.js");
const pay_1 = require("@solana/pay");
const config_1 = require("../config/config");
const bignumber_js_1 = __importDefault(require("bignumber.js"));
// Mockup skeleton 'can be changed' 
const httpConvertUSDC = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // mock up, no serious integration yet
    //response
    res.status(200).json({
        data: "converted"
    });
});
exports.httpConvertUSDC = httpConvertUSDC;
// Initialize a payment transaction.
const initializePayment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const recipient = new web3_js_1.PublicKey(config_1.defaultConfig.MERCHANT_ADDRESS);
        const reference = new web3_js_1.Keypair().publicKey;
        const amount = new bignumber_js_1.default(req.body.amount);
        const url = (0, pay_1.encodeURL)({ amount, recipient, label: 'New Payment', reference });
        res.status(200).json({
            message: 'Transaction Initialized.',
            data: { url },
        });
    }
    catch (error) {
        res.status(500).json({
            error: {
                message: 'Couldn\'t initialize transaction.'
            }
        });
    }
});
exports.initializePayment = initializePayment;
// Validate a payment transaction.
const validatePayment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const connection = new web3_js_1.Connection((0, web3_js_1.clusterApiUrl)('devnet'), 'confirmed');
        console.log('✅ Established connection to the network.');
        const { reference, amount } = req.body;
        const signatureInfo = yield (0, pay_1.findReference)(connection, reference, { finality: 'confirmed' });
        yield (0, pay_1.validateTransfer)(connection, signatureInfo.signature, { recipient: new web3_js_1.PublicKey(config_1.defaultConfig.MERCHANT_ADDRESS), amount: new bignumber_js_1.default(amount) });
        res.status(200).json({
            message: 'Payment validated.'
        });
    }
    catch (error) {
        res.status(500).json({
            error: {
                message: 'Couldn\'t validate payment.'
            }
        });
    }
});
exports.validatePayment = validatePayment;
//# sourceMappingURL=payment.controller.js.map
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
exports.actualRate = exports.nairaRate = void 0;
const puppeteer_1 = __importDefault(require("puppeteer"));
const nairaRate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const browser = yield puppeteer_1.default.launch();
        const page = yield browser.newPage();
        yield page.goto('https://www.binance.com/en-NG/trade/USDT_NGN?theme=dark&type=spot');
        const resultSelector = '.showPrice';
        const result = yield page.waitForSelector(resultSelector);
        const price = yield result.evaluate(el => el.textContent);
        res.status(200).json({
            data: {
                rate: +price,
            }
        });
        yield browser.close();
    }
    catch (error) {
        res.status(500).json({
            error: {
                message: 'Couldnt fetch conversion rates'
            }
        });
    }
});
exports.nairaRate = nairaRate;
const actualRate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const browser = yield puppeteer_1.default.launch();
        const page = yield browser.newPage();
        yield page.goto('https://p2p.binance.com/en/trade/sell/BUSD?fiat=NGN&payment=ALL');
        const inputAmountEL = '#C2Csearchamount_searchbox_amount';
        yield page.type(inputAmountEL, '10000');
        const searchAmountBtn = '#C2Csearchamount_btn_search';
        yield page.click(searchAmountBtn);
        const searchResultSelector = '.css-1m1f8hn';
        const result = yield page.waitForSelector(searchResultSelector);
        const price = yield result.evaluate(el => el.textContent);
        res.status(200).json({
            data: {
                rate: +price,
            }
        });
        yield browser.close();
    }
    catch (error) {
        res.status(500).json({
            error: {
                message: 'Couldnt fetch conversion rates'
            }
        });
    }
});
exports.actualRate = actualRate;
//Take ss for test purpose
// await page.screenshot({
//     fullPage: true,
//     path: 'new_image.png'
//   });
//   const screenshotPath = process.cwd() + '/new_image.png';
//   console.log('Location of the screenshot:', screenshotPath);
//# sourceMappingURL=rate.controller.js.map
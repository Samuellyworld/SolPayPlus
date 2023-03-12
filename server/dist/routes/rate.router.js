"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rateRouter = void 0;
// importing relevant modules
const express_1 = __importDefault(require("express"));
const rate_controller_1 = require("../controllers/rate.controller");
// creating rate route
exports.rateRouter = express_1.default.Router();
// getting BUSD-NGN conversion rate
exports.rateRouter.get('/', rate_controller_1.nairaRate);
//# sourceMappingURL=rate.router.js.map
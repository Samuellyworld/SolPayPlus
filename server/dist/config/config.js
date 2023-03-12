"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultConfig = void 0;
// importing relevant modules
const dotenv_1 = __importDefault(require("dotenv"));
//using .env
dotenv_1.default.config();
// defaultConfig object - this contains any config strings || numbers
exports.defaultConfig = {
    PORT: Number(process.env.PORT),
    FLW_PUBLIC_KEY: String(process.env.FLW_PUBLIC_KEY),
    FLW_SECRET_KEY: String(process.env.FLW_SECRET_KEY),
    MERCHANT_ADDRESS: String(process.env.MERCHANT_ADDRESS),
    DATABASE_URL: String(process.env.DATABASE_URL)
};
//# sourceMappingURL=config.js.map
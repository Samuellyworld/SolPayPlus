"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// importing inbuilt http module
const http_1 = __importDefault(require("http"));
// importing default config
const config_1 = require("./config/config");
// import app
const app_1 = require("./app");
// creating server
const server = http_1.default.createServer(app_1.app);
//server listen
server.listen(config_1.defaultConfig === null || config_1.defaultConfig === void 0 ? void 0 : config_1.defaultConfig.PORT, () => {
    console.log(`Listening on port ${config_1.defaultConfig === null || config_1.defaultConfig === void 0 ? void 0 : config_1.defaultConfig.PORT}`);
});
//# sourceMappingURL=server.js.map
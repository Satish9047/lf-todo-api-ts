"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router_1 = __importDefault(require("./router"));
const cors_1 = __importDefault(require("cors"));
const config_1 = __importDefault(require("./config"));
const app = (0, express_1.default)();
//middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((req, res, next) => {
    console.log(req.method, req.path);
    next();
});
//route handlers
app.use("/", router_1.default);
//listner
app.listen(config_1.default.serverPort, () => {
    console.log(`Server running on port ${config_1.default.serverPort} ....`);
});
//# sourceMappingURL=index.js.map
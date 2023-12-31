"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const tasks_1 = __importDefault(require("./tasks"));
const user_1 = __importDefault(require("./user"));
const auth_1 = __importDefault(require("./auth"));
const router = express_1.default.Router();
//route handlers
router.use("/tasks", tasks_1.default);
router.use("/users", user_1.default);
router.use("/auth", auth_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map
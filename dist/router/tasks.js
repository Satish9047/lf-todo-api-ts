"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const tasksRouter = express_1.default.Router();
tasksRouter.get("/tasks", (req, res) => {
    console.log(req.headers);
    res.send("You get the tasks");
});
exports.default = tasksRouter;
//# sourceMappingURL=tasks.js.map
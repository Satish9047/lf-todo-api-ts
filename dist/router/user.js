"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userRouter = (0, express_1.Router)();
const user_1 = require("../controller/user");
userRouter.use("/users", user_1.userController);
exports.default = userRouter;
//# sourceMappingURL=user.js.map
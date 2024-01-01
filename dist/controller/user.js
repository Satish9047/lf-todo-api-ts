"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const user_1 = require("../service/user");
const userController = (req, res) => {
    const data = (0, user_1.getAllUser)();
    return res.json(data);
};
exports.userController = userController;
//# sourceMappingURL=user.js.map
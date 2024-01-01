"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUsers = void 0;
const user_1 = require("../data/user");
const getAllUsers = () => {
    const userData = user_1.usersArray.map((user) => {
        return {
            id: user.id,
            name: user.name,
            email: user.email,
        };
    });
    return userData;
};
exports.getAllUsers = getAllUsers;
//# sourceMappingURL=user.js.map
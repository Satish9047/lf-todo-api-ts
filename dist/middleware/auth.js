"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerAuth = exports.loginAuth = void 0;
const auth_1 = require("../schema/auth");
const loginAuth = (req, res, next) => {
    const { error } = auth_1.loginSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
};
exports.loginAuth = loginAuth;
const registerAuth = (req, res, next) => {
    const { error } = auth_1.registerSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
};
exports.registerAuth = registerAuth;
//# sourceMappingURL=auth.js.map
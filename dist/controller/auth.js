"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRefreshToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../config"));
const getRefreshToken = (req, res) => {
    console.log(req.headers.authorization);
    const token = req.headers.authorization?.split(" ")?.[1];
    if (token) {
        try {
            const payload = jsonwebtoken_1.default.verify(token, config_1.default.jwtSecret);
            const accessToken = jsonwebtoken_1.default.sign({ data: payload.data }, config_1.default.jwtSecret, { expiresIn: config_1.default.accessTokenExpiry });
            return res.json({ accesstoken: accessToken });
        }
        catch (error) {
            return res.json({ msg: error.message });
        }
    }
    return res.json({ msg: "refresh token not found" });
};
exports.getRefreshToken = getRefreshToken;
//# sourceMappingURL=auth.js.map
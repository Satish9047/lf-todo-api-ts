"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRefreshToken = exports.getLogin = exports.getRegister = void 0;
const Auth = __importStar(require("../model/auth"));
//get register service
const getRegister = async (credential) => {
    try {
        const data = await Auth.getRegister(credential);
        console.log(data, "from the return service/user");
        return data;
    }
    catch (error) {
        console.error("Error in Register:", error);
        return { success: false, message: "Internal server error" };
    }
};
exports.getRegister = getRegister;
//login service
const getLogin = async (credential) => {
    try {
        const data = await Auth.getLogin(credential);
        return data;
    }
    catch (error) {
        console.error("Error in login:", error);
        return { success: false, message: "Internal server error" };
    }
};
exports.getLogin = getLogin;
//refresh token service
const getRefreshToken = async (accessToken) => {
    try {
        const data = await Auth.getRefreshToken(accessToken);
        return data;
    }
    catch (error) {
        console.error("Error in token: ", error);
        return { success: false, message: "Internal server error" };
    }
};
exports.getRefreshToken = getRefreshToken;
//# sourceMappingURL=auth.js.map
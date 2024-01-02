"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRefreshToken = exports.getLogin = exports.getRegister = void 0;
const fs_1 = __importDefault(require("fs"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../config"));
const user_1 = require("../data/user");
const saltRounds = 10;
const usersArrayFilePath = "./src/data/user.ts";
/**
 * register the user in the file
 *
 * @param updatedUsers Array of updated users
 */
const writeUsersToFile = (updatedUsers) => {
    try {
        fs_1.default.writeFileSync(usersArrayFilePath, `export const usersArray = ${JSON.stringify(updatedUsers, null, 4)};`, "utf-8");
    }
    catch (error) {
        console.error("Error writing users array file:", error);
    }
};
//handle register request
const getRegister = async (credential) => {
    if (!credential)
        return { success: false, message: "Empty credentials" };
    try {
        // Hash the password with the generated salt
        const hashedPassword = await bcrypt_1.default.hash(credential.password, saltRounds);
        // Create a new user object with the hashed password
        const newUser = {
            id: user_1.usersArray.length + 1,
            name: credential.name,
            email: credential.email,
            password: hashedPassword,
        };
        user_1.usersArray.push(newUser); // Add the new user to the users array
        writeUsersToFile(user_1.usersArray); // Write the updated users array back to the file
        return { success: true, message: "Register Successful" };
    }
    catch (error) {
        return { success: false, message: "Registration failed", details: `${error}` };
    }
};
exports.getRegister = getRegister;
//handle login request
const getLogin = async (credential) => {
    if (!credential)
        return { success: false, message: "Empty credentials" };
    // Finding the user by email
    const user = user_1.usersArray.find((user) => {
        return user.email === credential.email;
    });
    // Check if user exists and verify the hashed password
    if (user && (await bcrypt_1.default.compare(credential.password, user.password))) {
        const accessToken = jsonwebtoken_1.default.sign({ data: user.email, tokenType: "access" }, config_1.default.jwtSecret, { expiresIn: config_1.default.accessTokenExpiry });
        const refreshToken = jsonwebtoken_1.default.sign({ data: user.email, tokenType: "refresh" }, config_1.default.jwtSecret, { expiresIn: config_1.default.refreshTokenExpiry });
        return { success: true, message: "Login successful", accessToken: accessToken, refreshToken: refreshToken };
    }
    else {
        return { success: false, message: "Login unsuccessful" };
    }
};
exports.getLogin = getLogin;
//handle refresh token request
const getRefreshToken = async (accessToken) => {
    const token = accessToken?.split(" ")?.[1];
    if (token) {
        try {
            const payload = jsonwebtoken_1.default.verify(token, config_1.default.jwtSecret);
            if (payload.tokeType !== "refresh")
                throw new Error("invalid token");
            const accessToken = jsonwebtoken_1.default.sign({ data: payload.data, tokenType: "access" }, config_1.default.jwtSecret, { expiresIn: config_1.default.accessTokenExpiry });
            return { accessToken: accessToken };
        }
        catch (error) {
            return { msg: error.message };
        }
    }
    return { msg: "refresh token not found" };
};
exports.getRefreshToken = getRefreshToken;
//# sourceMappingURL=auth.js.map
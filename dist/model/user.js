"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLogin = exports.getRegister = exports.getAllUsers = void 0;
const fs_1 = __importDefault(require("fs"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_1 = require("../data/user");
const config_1 = __importDefault(require("../config"));
const saltRounds = 10;
const usersArrayFilePath = "./src/data/user.ts";
const writeUsersToFile = (updatedUsers) => {
    try {
        fs_1.default.writeFileSync(usersArrayFilePath, `export const usersArray = ${JSON.stringify(updatedUsers, null, 4)};`, "utf-8");
    }
    catch (error) {
        console.error("Error writing users array file:", error);
    }
};
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
        //console.error("Error during registration:", error);
        return { success: false, message: "Registration failed", details: `${error}` };
    }
};
exports.getRegister = getRegister;
const getLogin = async (credential) => {
    if (!credential)
        return { success: false, message: "Empty credentials" };
    // Finding the user by email
    const user = user_1.usersArray.find((user) => {
        return user.email === credential.email;
    });
    // Check if user exists and verify the hashed password
    if (user && (await bcrypt_1.default.compare(credential.password, user.password))) {
        const jwtToken = jsonwebtoken_1.default.sign({ data: user.email }, config_1.default.jwtSecret, { expiresIn: config_1.default.accessTokenExpiry });
        const refreshToken = jsonwebtoken_1.default.sign({ data: user.email }, config_1.default.jwtSecret, { expiresIn: config_1.default.refreshTokenExpiry });
        return { success: true, message: "Login successful", accesstoken: jwtToken, refreshToken: refreshToken };
    }
    else {
        return { success: false, message: "Login unsuccessful" };
    }
};
exports.getLogin = getLogin;
//# sourceMappingURL=user.js.map
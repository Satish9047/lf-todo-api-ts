import fs from "fs";
import bcrypt from "bcrypt";
import jwt, { JwtPayload } from "jsonwebtoken";
import config from "../config";
import { IloginCredential, IregisterCredential } from "../service/auth";
import { usersArray } from "../data/user";
import { IUsersArray } from "../interface/user";


const saltRounds = 10;
const usersArrayFilePath = "./src/data/user.ts";

/**
 * register the user in the file
 * 
 * @param updatedUsers Array of updated users
 */
const writeUsersToFile = (updatedUsers: IUsersArray[]) => {
    try {
        fs.writeFileSync(usersArrayFilePath, `export const usersArray = ${JSON.stringify(updatedUsers, null, 4)};`, "utf-8");
    } catch (error) {
        console.error("Error writing users array file:", error);
    }
};


//handle register request
export const getRegister = async (credential: IregisterCredential) => {
    if (!credential) return { success: false, message: "Empty credentials" };

    try {
        // Hash the password with the generated salt
        const hashedPassword = await bcrypt.hash(credential.password, saltRounds);

        // Create a new user object with the hashed password
        const newUser: IUsersArray = {
            id: usersArray.length + 1,
            name: credential.name,
            email: credential.email,
            password: hashedPassword,
        };

        usersArray.push(newUser); // Add the new user to the users array
        writeUsersToFile(usersArray); // Write the updated users array back to the file

        return { success: true, message: "Register Successful" };
    } catch (error) {

        return { success: false, message: "Registration failed", details: `${error}` };
    }
};


//handle login request
export const getLogin = async (credential: IloginCredential) => {
    if (!credential) return { success: false, message: "Empty credentials" };

    // Finding the user by email
    const user = usersArray.find((user) => {
        return user.email === credential.email;
    });

    // Check if user exists and verify the hashed password
    if (user && (await bcrypt.compare(credential.password, user.password))) {
        const accessToken = jwt.sign({ data: user.email, tokenType: "access" }, config.jwtSecret, { expiresIn: config.accessTokenExpiry });
        const refreshToken = jwt.sign({ data: user.email, tokenType: "refresh" }, config.jwtSecret, { expiresIn: config.refreshTokenExpiry });
        return { success: true, message: "Login successful", accessToken: accessToken, refreshToken: refreshToken };
    } else {
        return { success: false, message: "Login unsuccessful" };
    }
};


//handle refresh token request
export const getRefreshToken = async (accessToken: string) => {
    const token = accessToken?.split(" ")?.[1];
    if (token) {
        try {
            const payload = jwt.verify(token, config.jwtSecret) as JwtPayload;
            if (payload.tokeType !== "refresh") throw new Error("invalid token");
            const accessToken = jwt.sign({ data: payload.data, tokenType: "access" }, config.jwtSecret, { expiresIn: config.accessTokenExpiry });
            return { accessToken: accessToken };
        } catch (error) {
            return { msg: (error as Error).message };
        }
    }
    return { msg: "refresh token not found" };
};


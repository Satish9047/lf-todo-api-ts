
import fs from "fs";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { IloginCredential } from "../service/user";
import { IregisterCredential } from "../service/user";
import { usersArray } from "../data/user";
import { IUsersArray } from "../interface/user";
import config from "../config";

const saltRounds = 10;
const usersArrayFilePath = "./src/data/user.ts";


const writeUsersToFile = (updatedUsers: IUsersArray[]) => {
    try {
        fs.writeFileSync(usersArrayFilePath, `export const usersArray = ${JSON.stringify(updatedUsers, null, 4)};`, "utf-8");
    } catch (error) {
        console.error("Error writing users array file:", error);
    }
};

export const getAllUsers = () => {
    const userData = usersArray.map((user) => {
        return {
            id: user.id,
            name: user.name,
            email: user.email,
        };
    });
    return userData;
};

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
        //console.error("Error during registration:", error);
        return { success: false, message: "Registration failed", details: `${error}` };
    }
};

export const getLogin = async (credential: IloginCredential) => {
    if (!credential) return { success: false, message: "Empty credentials" };

    // Finding the user by email
    const user = usersArray.find((user) => {
        return user.email === credential.email;
    });

    // Check if user exists and verify the hashed password
    if (user && (await bcrypt.compare(credential.password, user.password))) {
        const jwtToken = jwt.sign({ data: user.email }, config.jwtSecret, { expiresIn: config.accessTokenExpiry });
        const refreshToken = jwt.sign({ data: user.email }, config.jwtSecret, { expiresIn: config.refreshTokenExpiry });
        return { success: true, message: "Login successful", accesstoken: jwtToken, refreshToken: refreshToken };
    } else {
        return { success: false, message: "Login unsuccessful" };
    }
};

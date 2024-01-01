import dotenv from "dotenv";
dotenv.config();

const config = {
    serverPort: process.env.PORT,
    accessTokenExpiry: process.env.ACCESS_TOKEN_EXPIRY,
    refreshTokenExpiry: process.env.REFRESH_TOKEN_EXPIRY,
    jwtSecret: process.env.JWT_SECRET || "jwtsecret",
};

export default config;
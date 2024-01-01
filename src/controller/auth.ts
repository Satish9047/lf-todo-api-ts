import jwt, { JwtPayload } from "jsonwebtoken";
import { Response, Request } from "express";
import config from "../config";

// export const handleLogin = (req: Request, res: Response) => {
//     const data = await authService.getLogin(req.body);
//     console.log(data, "getting return, from controller/user");
//     return res.json(data);
// };

// export const handleRegister = (req: Request, res: Response) => {
//     const data = await userService.getRegister(req.body);
//     console.log(data, "getting return, from controller/user");
//     return res.json(data);
// };



export const getRefreshToken = (req: Request, res: Response) => {
    console.log(req.headers.authorization);
    const token = req.headers.authorization?.split(" ")?.[1];
    if (token) {
        try {
            const payload = jwt.verify(token, config.jwtSecret) as JwtPayload;
            const accessToken = jwt.sign({ data: payload.data }, config.jwtSecret, { expiresIn: config.accessTokenExpiry });
            return res.json({ accesstoken: accessToken });
        } catch (error) {
            return res.json({ msg: (error as Error).message });
        }

    }
    return res.json({ msg: "refresh token not found" });
};
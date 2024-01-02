import { Response, Request } from "express";
import * as authService from "../service/auth";

//handle login request
export const handleLogin = async (req: Request, res: Response) => {
    const data = await authService.getLogin(req.body);
    return res.json(data);
};

//handle register request
export const handleRegister = async (req: Request, res: Response) => {
    const data = await authService.getRegister(req.body);
    return res.json(data);
};

//to get refresh token
export const getRefreshToken = async (req: Request, res: Response) => {
    const data = await authService.getRefreshToken(req.headers.authorization as string);
    return res.json(data);
};


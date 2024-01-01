
import { Response, Request } from "express";
import * as authService from "../service/auth";

export const handleLogin = async (req: Request, res: Response) => {
    const data = await authService.getLogin(req.body);
    return res.json(data);
};

export const handleRegister = async (req: Request, res: Response) => {
    const data = await authService.getRegister(req.body);
    return res.json(data);
};

export const getRefreshToken = async (req: Request, res: Response) => {
    const data = await authService.getRefreshToken(req.headers.authorization as string);
    return res.json(data);
};


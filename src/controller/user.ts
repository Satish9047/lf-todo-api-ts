
import { Request, Response } from "express";
import * as userService from "../service/user";

export const getAllUsers = (req: Request, res: Response) => {
    //console.log("hello from controller");
    const data = userService.getAllUser();
    return res.json(data);
};

export const getLogin = (req: Request, res: Response) => {
    const data = userService.getLogin(req.body);
    return res.json(data);
};

export const getRegister = (req: Request, res: Response) => {
    // console.log(req.body);
    const data = userService.getRegister(req.body);
    return res.json(data);
};



import { Request, Response } from "express";
import * as userService from "../service/user";

export const getAllUsers = (req: Request, res: Response) => {
    const data = userService.getAllUser();
    return res.json(data);
};



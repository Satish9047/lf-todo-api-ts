
import { Request, Response } from "express";
import * as userService from "../service/user";

export const getAllUsers = (req: Request, res: Response) => {
    console.log("hello from controller");
    const data = userService.getAllUser();
    return res.json(data);
};


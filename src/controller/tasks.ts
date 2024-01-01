import { Request, Response } from "express";

export const userController = (req:Request, res:Response)=>{
    res.send("you get the user");
};

import { Request, Response } from "express";
import userArray, { IUserArray } from "../data/user.js";

export const userController = (req: Request, res: Response) => {
    console.log(req.headers);
    const data: IUserArray[] = userArray;
    return res.send(data);
};


// try {
//     const data = userService.getAllUser();
//     return res.json(data);
// } catch (error) {
//     console.error("Error in userController:", error);
//     return res.status(500).json({ error: "Internal Server Error" });
// }
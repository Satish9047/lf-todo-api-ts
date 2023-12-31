import express, { Router, Request, Response } from "express";
const userRouter: Router = express.Router();

userRouter.get("/user", (req: Request, res: Response) => {
    res.send("you get the user");
});

export default userRouter;
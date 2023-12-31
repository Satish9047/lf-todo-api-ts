import express, { Router, Request, Response } from "express";
const tasksRouter: Router = express.Router();

tasksRouter.get("/tasks", (req:Request, res:Response)=>{
    console.log(req.headers);
    res.send("You get the tasks");
});

export default tasksRouter;
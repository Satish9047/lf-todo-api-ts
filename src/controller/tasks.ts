import { Request, Response } from "express";
import * as taskService from "../service/task";

export const getAllTasks = (req: Request, res: Response) => {
    const data = taskService.getAllTask();
    return res.json(data);
};

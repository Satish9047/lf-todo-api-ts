import { Request, Response } from "express";
import * as taskService from "../service/task";

export const getAllTasks = (req: Request, res: Response) => {
    const data = taskService.getAllTask();
    return res.json(data);
};

export const getTaskById = (req: Request, res: Response) => {
    //const taskId: number = parseInt(req.params.id, 10);

    const data = taskService.getTaskById(req.params.id);
    return res.json(data);
};

export const createTask = async (req: Request, res: Response) => {
    const data = await taskService.createTask(req.body);
    return res.json(data);
};

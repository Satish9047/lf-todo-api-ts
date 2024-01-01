import { Request, Response } from "express";
import * as taskService from "../service/task";

export const getAllTasks = async (req: Request, res: Response) => {
    const data = await taskService.getAllTask();
    return res.json(data);
};

export const getTaskById = async (req: Request, res: Response) => {
    const data = await taskService.getTaskById(req.params.id);
    if (!data) {
        return res.status(404).json({ message: "Task not found" });
    }
    return res.json(data);
};

export const createTask = async (req: Request, res: Response) => {
    const data = await taskService.createTask(req.body);
    if (data.success) {
        return res.status(201).json(data);
    } else {
        return res.status(400).json(data);
    }
};

export const updateTask = async (req: Request, res: Response) => {
    const data = await taskService.updateTask(req.params.id);
    if (data.success) {
        return res.status(200).json(data);
    } else {
        return res.status(400).json(data);
    }
};

export const deleteTask = async (req: Request, res: Response) => {
    const data = await taskService.deleteTask(req.params.id);
    if (data.success) {
        return res.status(201).json(data);
    } else {
        return res.status(400).json(data);
    }
};

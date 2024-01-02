import { Request, Response } from "express";
import * as taskService from "../service/task";


//get all tasks
export const getAllTasks = async (req: Request, res: Response) => {
    const query = req.query;
    if (query) {
        const data = await taskService.getFilterTasks(query);
        return res.json(data);
    }

    console.log(query);
    const data = await taskService.getAllTask();
    return res.json(data);
};


//get task by id
export const getTaskById = async (req: Request, res: Response) => {
    const data = await taskService.getTaskById(req.params.id);
    if (!data) {
        return res.status(404).json({ message: "Task not found ...." });
    }
    return res.status(200).json(data);
};

//get completed tasks
export const completedTask = async (req: Request, res: Response) => {
    const data = await taskService.completedTask();
    if (!data) {
        return res.status(404).json({ message: "Completed Task not found" });
    }
    return res.status(200).json(data);
};


//create task
export const createTask = async (req: Request, res: Response) => {
    const data = await taskService.createTask(req.body);
    if (data.success) {
        return res.status(201).json(data);
    } else {
        return res.status(400).json(data);
    }
};


//update task
export const updateTask = async (req: Request, res: Response) => {
    const data = await taskService.updateTask(req.params.id);
    if (data.success) {
        return res.status(200).json(data);
    } else {
        return res.status(400).json(data);
    }
};


//delete task
export const deleteTask = async (req: Request, res: Response) => {
    const data = await taskService.deleteTask(req.params.id);
    if (data.success) {
        return res.status(201).json(data);
    } else {
        return res.status(400).json(data);
    }
};

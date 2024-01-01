import * as Task from "../model/task";

export interface INewTask {
    title: string;
    description: string;
    isCompleted: boolean;
}

export const getAllTask = async () => {
    const data = Task.getAllTask();
    return data;
};

export const getTaskById = async (taskId: string) => {
    const data = Task.getTaskById(taskId);
    return data;
};

export const completedTask = async () => {
    const data = Task.getCompletedTask();
    return data;
};

export const createTask = async (newTask: INewTask) => {
    const data = Task.createTask(newTask);
    return data;
};

export const updateTask = async (taskId: string) => {
    const data = Task.updateTask(taskId);
    return data;
};

export const deleteTask = async (taskId: string) => {
    const data = Task.deleteTask(taskId);
    return data;
};
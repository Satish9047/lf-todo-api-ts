import * as Task from "../model/task";

export interface INewTask {
    title: string;
    description: string;
}

export const getAllTask = () => {
    const data = Task.getAllTask();
    return data;
};

export const getTaskById = (taskId: string) => {
    const data = Task.getTaskById(taskId);
    return data;
};

export const createTask = (newTask: INewTask) => {
    const data = Task.createTask(newTask);
    return data;
};
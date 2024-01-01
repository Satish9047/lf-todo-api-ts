import * as Task from "../model/task";

export const getAllTask = () => {
    const data = Task.getAllTask();
    return data;
};

export const getTaskById = (taskId: number) => {
    const data = Task.getTaskById(taskId);
    return data;
};
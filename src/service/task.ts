import * as Task from "../model/task";

export const getAllTask = () => {
    const data = Task.getAllTask();
    return data;
};
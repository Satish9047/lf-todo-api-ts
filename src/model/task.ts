//import fs from "fs";
import { tasksArray } from "../data/task";
// import { ITasksArray } from "../interface/task";

export const getAllTask = () => {
    const taskdata = tasksArray.map((task) => {
        return {
            id: task.id,
            title: task.title,
            description: task.description,
            isCompleted: task.isCompleted,
        };
    });
    return taskdata;
};

export const getTaskById = (taskId: number) => {
    const task = tasksArray.find((task) => {
        return task.id === taskId;
    });
    return task;
};
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
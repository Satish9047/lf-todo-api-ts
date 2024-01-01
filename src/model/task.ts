import fs from "fs";
import { tasksArray } from "../data/task";
import { INewTask } from "../service/task";
import { ITasksArray } from "../interface/task";

const taskArrayFilePath = "./src/data/task.ts";

const writeTaskToFile = (updateTask: ITasksArray[]) => {
    try {
        fs.writeFileSync(taskArrayFilePath, `export const tasksArray = ${JSON.stringify(updateTask, null, 4)};`, "utf-8");
    } catch (error) {
        console.error("Error writing task array file:", error);
    }
};



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

export const getTaskById = (taskId: string) => {
    const task = tasksArray.find((task) => {
        return task.id === taskId;
    });
    return task;
};

export const createTask = (newTask: INewTask) => {
    const newTaskObj = {
        id: getUniqueId(),
        title: newTask.title,
        description: newTask.description,
        isCompleted: false,
    };

    try {
        tasksArray.push(newTaskObj);
        writeTaskToFile(tasksArray);
        return { success: true, message: "Task added Successful" };
    } catch (error) {
        console.error("server error", error);
        return { success: false, message: "server error" };
    }
};

function getUniqueId() {
    const timeNow = Date.now().toString(36);
    const randomNumber = Math.floor(Math.random() * 1000).toString(36);
    return `${timeNow}_${randomNumber}`;
}
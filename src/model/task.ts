import fs from "fs";
import { tasksArray } from "../data/task";
import { INewTask } from "../service/task";
import { ITasksArray } from "../interface/task";

const taskArrayFilePath = "./src/data/task.ts";

//saving the task in a file
const writeTaskToFile = (updateTask: ITasksArray[]) => {
    try {
        fs.writeFileSync(taskArrayFilePath, `export const tasksArray = ${JSON.stringify(updateTask, null, 4)};`, "utf-8");
    } catch (error) {
        console.error("Error writing task array file:", error);
    }
};


//get all tasks
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

//get task by ID
export const getTaskById = (taskId: string) => {
    const task = tasksArray.find((task) => {
        return task.id === taskId;
    });
    return task;
};


//create new task
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

//update task
export const updateTask = (taskId: string) => {
    const task = tasksArray.find((task) => {
        return task.id === taskId;
    });
    if (task) {
        task.isCompleted = !task.isCompleted;
        writeTaskToFile(tasksArray);
        return { success: true, message: "Task updated Successful" };
    } else {
        return { success: false, message: "Task not found" };
    }
};

//delete task
export const deleteTask = (taskId: string) => {
    const task = tasksArray.find((task) => {
        return task.id === taskId;
    });
    if (task) {
        tasksArray.splice(tasksArray.indexOf(task), 1);
        writeTaskToFile(tasksArray);
        return { success: true, message: "Task deleted Successful" };
    } else {
        return { success: false, message: "Task not found" };
    }
};


/**
 * Generater unique ID
 * 
 * @returns String //unique id
 */
function getUniqueId() {
    const timeNow = Date.now().toString(36);
    const randomNumber = Math.floor(Math.random() * 1000).toString(36);
    return `${timeNow}_${randomNumber}`;
}
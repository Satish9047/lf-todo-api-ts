"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.updateTask = exports.createTask = exports.getInCompletedTask = exports.getCompletedTask = exports.getTaskById = exports.getAllTask = void 0;
const fs_1 = __importDefault(require("fs"));
const task_1 = require("../data/task");
const taskArrayFilePath = "./src/data/task.ts";
//saving the task in a file
const writeTaskToFile = (updateTask) => {
    try {
        fs_1.default.writeFileSync(taskArrayFilePath, `export const tasksArray = ${JSON.stringify(updateTask, null, 4)};`, "utf-8");
    }
    catch (error) {
        console.error("Error writing task array file:", error);
    }
};
//get all tasks
const getAllTask = () => {
    const taskdata = task_1.tasksArray.map((task) => {
        return {
            id: task.id,
            title: task.title,
            description: task.description,
            isCompleted: task.isCompleted,
        };
    });
    return taskdata;
};
exports.getAllTask = getAllTask;
//get task by ID
const getTaskById = (taskId) => {
    const task = task_1.tasksArray.find((task) => {
        return task.id === taskId;
    });
    return task;
};
exports.getTaskById = getTaskById;
//get completed task 
const getCompletedTask = () => {
    const tasks = task_1.tasksArray.filter((task) => {
        return task.isCompleted === true;
    });
    return tasks;
};
exports.getCompletedTask = getCompletedTask;
//get incompleted
const getInCompletedTask = () => {
    const tasks = task_1.tasksArray.filter((task) => {
        return task.isCompleted === false;
    });
    return tasks;
};
exports.getInCompletedTask = getInCompletedTask;
//create new task
const createTask = (newTask) => {
    const newTaskObj = {
        id: getUniqueId(),
        title: newTask.title,
        description: newTask.description,
        isCompleted: false,
    };
    try {
        task_1.tasksArray.push(newTaskObj);
        writeTaskToFile(task_1.tasksArray);
        return { success: true, message: "Task added Successful" };
    }
    catch (error) {
        console.error("server error", error);
        return { success: false, message: "server error" };
    }
};
exports.createTask = createTask;
//update task
const updateTask = (taskId) => {
    const task = task_1.tasksArray.find((task) => {
        return task.id === taskId;
    });
    if (task) {
        task.isCompleted = !task.isCompleted;
        writeTaskToFile(task_1.tasksArray);
        return { success: true, message: "Task updated Successful" };
    }
    else {
        return { success: false, message: "Task not found" };
    }
};
exports.updateTask = updateTask;
//delete task
const deleteTask = (taskId) => {
    const task = task_1.tasksArray.find((task) => {
        return task.id === taskId;
    });
    if (task) {
        task_1.tasksArray.splice(task_1.tasksArray.indexOf(task), 1);
        writeTaskToFile(task_1.tasksArray);
        return { success: true, message: "Task deleted Successful" };
    }
    else {
        return { success: false, message: "Task not found" };
    }
};
exports.deleteTask = deleteTask;
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
//# sourceMappingURL=task.js.map
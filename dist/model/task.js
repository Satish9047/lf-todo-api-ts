"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTask = exports.getTaskById = exports.getAllTask = void 0;
const fs_1 = __importDefault(require("fs"));
const task_1 = require("../data/task");
const taskArrayFilePath = "./src/data/task";
const writeTaskToFile = (updateTask) => {
    try {
        fs_1.default.writeFileSync(taskArrayFilePath, `export const tasksArray = ${JSON.stringify(updateTask, null, 4)};`, "utf-8");
    }
    catch (error) {
        console.error("Error writing task array file:", error);
    }
};
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
const getTaskById = (taskId) => {
    const task = task_1.tasksArray.find((task) => {
        return task.id === taskId;
    });
    return task;
};
exports.getTaskById = getTaskById;
const createTask = (newTask) => {
    const newTaskObj = {
        id: getUniqueId(),
        title: newTask.title,
        description: newTask.description,
        isCompleted: false,
    };
    task_1.tasksArray.push(newTaskObj);
    writeTaskToFile(task_1.tasksArray);
};
exports.createTask = createTask;
function getUniqueId() {
    const timeNow = Date.now().toString(36);
    const randomNumber = Math.floor(Math.random() * 1000).toString(36);
    return `${timeNow}_${randomNumber}`;
}
//# sourceMappingURL=task.js.map
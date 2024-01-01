"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTaskById = exports.getAllTask = void 0;
//import fs from "fs";
const task_1 = require("../data/task");
// import { ITasksArray } from "../interface/task";
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
//# sourceMappingURL=task.js.map
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.updateTask = exports.createTask = exports.completedTask = exports.getTaskById = exports.getFilterTasks = exports.getAllTask = void 0;
const Task = __importStar(require("../model/task"));
const getAllTask = async () => {
    const data = Task.getAllTask();
    return data;
};
exports.getAllTask = getAllTask;
const getFilterTasks = async (query) => {
    console.log(query.isCompleted, Boolean(query.isCompleted), typeof (query.isCompleted));
    if (query.isCompleted === "true") {
        const data = Task.getCompletedTask();
        return data;
    }
    else if (query.isCompleted === "false") {
        const data = Task.getInCompletedTask();
        return data;
    }
    else {
        const data = Task.getAllTask();
        return data;
    }
};
exports.getFilterTasks = getFilterTasks;
const getTaskById = async (taskId) => {
    const data = Task.getTaskById(taskId);
    return data;
};
exports.getTaskById = getTaskById;
const completedTask = async () => {
    const data = Task.getCompletedTask();
    return data;
};
exports.completedTask = completedTask;
const createTask = async (newTask) => {
    const data = Task.createTask(newTask);
    return data;
};
exports.createTask = createTask;
const updateTask = async (taskId) => {
    const data = Task.updateTask(taskId);
    return data;
};
exports.updateTask = updateTask;
const deleteTask = async (taskId) => {
    const data = Task.deleteTask(taskId);
    return data;
};
exports.deleteTask = deleteTask;
//# sourceMappingURL=task.js.map
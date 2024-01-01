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
exports.deleteTask = exports.updateTask = exports.createTask = exports.completedTask = exports.getTaskById = exports.getAllTasks = void 0;
const taskService = __importStar(require("../service/task"));
//get all tasks
const getAllTasks = async (req, res) => {
    const data = await taskService.getAllTask();
    return res.json(data);
};
exports.getAllTasks = getAllTasks;
//get task by id
const getTaskById = async (req, res) => {
    const data = await taskService.getTaskById(req.params.id);
    if (!data) {
        return res.status(404).json({ message: "Task not found ...." });
    }
    return res.status(200).json(data);
};
exports.getTaskById = getTaskById;
//get completed tasks
const completedTask = async (req, res) => {
    const data = await taskService.completedTask();
    if (!data) {
        return res.status(404).json({ message: "Completed Task not found" });
    }
    return res.status(200).json(data);
};
exports.completedTask = completedTask;
//create task
const createTask = async (req, res) => {
    const data = await taskService.createTask(req.body);
    if (data.success) {
        return res.status(201).json(data);
    }
    else {
        return res.status(400).json(data);
    }
};
exports.createTask = createTask;
//update task
const updateTask = async (req, res) => {
    const data = await taskService.updateTask(req.params.id);
    if (data.success) {
        return res.status(200).json(data);
    }
    else {
        return res.status(400).json(data);
    }
};
exports.updateTask = updateTask;
//delete task
const deleteTask = async (req, res) => {
    const data = await taskService.deleteTask(req.params.id);
    if (data.success) {
        return res.status(201).json(data);
    }
    else {
        return res.status(400).json(data);
    }
};
exports.deleteTask = deleteTask;
//# sourceMappingURL=tasks.js.map
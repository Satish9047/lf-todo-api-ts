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
exports.deleteTask = exports.updateTask = exports.createTask = exports.getTaskById = exports.getAllTasks = void 0;
const taskService = __importStar(require("../service/task"));
const getAllTasks = (req, res) => {
    const data = taskService.getAllTask();
    return res.json(data);
};
exports.getAllTasks = getAllTasks;
const getTaskById = (req, res) => {
    //const taskId: number = parseInt(req.params.id, 10);
    const data = taskService.getTaskById(req.params.id);
    return res.json(data);
};
exports.getTaskById = getTaskById;
const createTask = async (req, res) => {
    const data = await taskService.createTask(req.body);
    return res.json(data);
};
exports.createTask = createTask;
const updateTask = async (req, res) => {
    const data = await taskService.updateTask(req.params.id);
    return res.json(data);
};
exports.updateTask = updateTask;
const deleteTask = async (req, res) => {
    const data = await taskService.deleteTask(req.params.id);
    return res.json(data);
};
exports.deleteTask = deleteTask;
//# sourceMappingURL=tasks.js.map
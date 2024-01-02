"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllTasks = void 0;
const fs_1 = __importDefault(require("fs"));
const filePath = "../data/tasks.ts";
const getAllTasks = () => {
    fs_1.default.readFile(filePath, "utf8", (err, data) => {
        if (err) {
            console.error("Error reading file:", err);
            return;
        }
        try {
            // Parsing the JSON data
            const allTaskData = JSON.parse(data);
            console.log(allTaskData);
            return allTaskData;
        }
        catch (jsonError) {
            console.error("Error parsing JSON:", jsonError);
        }
    });
};
exports.getAllTasks = getAllTasks;
//# sourceMappingURL=tasks.js.map
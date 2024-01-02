
import * as Task from "../model/task";

export interface INewTask {
    title: string;
    description: string;
    isCompleted: boolean;
}

export interface IQueryTask {
    isCompleted?: string;
    search?: string;
}

//get all task service
export const getAllTask = async () => {
    const data = Task.getAllTask();
    return data;
};

//get task using query service
export const getFilterTasks = async (query: IQueryTask) => {
    if (query.search) {
        const searchData = Task.searchTask(query.search);
        return searchData;
    }
    //console.log(query.isCompleted, Boolean(query.isCompleted), typeof (query.isCompleted));
    if (query.isCompleted === "true") {
        const data = Task.getCompletedTask();
        return data;
    } else if (query.isCompleted === "false") {
        const data = Task.getInCompletedTask();
        return data;
    } else {
        const data = Task.getAllTask();
        return data;
    }

};

//get task by Id service
export const getTaskById = async (taskId: string) => {
    const data = Task.getTaskById(taskId);
    return data;
};


//get completed task service
export const completedTask = async () => {
    const data = Task.getCompletedTask();
    return data;
};

//create task service
export const createTask = async (newTask: INewTask) => {
    const data = Task.createTask(newTask);
    return data;
};

//update task service
export const updateTask = async (taskId: string) => {
    const data = Task.updateTask(taskId);
    return data;
};

//delete task service
export const deleteTask = async (taskId: string) => {
    const data = Task.deleteTask(taskId);
    return data;
};
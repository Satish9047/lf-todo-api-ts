interface ITaskArray {
    id: number;
    title: string;
    description: string;
    isCompleted: boolean;
}

const taskArray:ITaskArray[] = [
    {
        id: 1,
        title: "Task 1",
        description: "This is a task 1",
        isCompleted: false
    },
    {
        id: 2,
        title: "Task 2",
        description: "This is a task 2",
        isCompleted: false
    }
];

export default taskArray;
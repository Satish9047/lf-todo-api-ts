interface IUserArray {
    id: number;
    name: string;
    email: string;
    password: string;
}

const userArray: IUserArray[] = [
    {
        id: 1,
        name: "User 1",
        email: "user@gmail.com",
        password: "user12345"
    },
    {
        id: 2,
        name: "User 2",
        email: "admin@gmail.com",
        password: "admin12345"
    }
];

export default userArray;
// // service/user.ts
// import fs from "fs";
// import { IUserArray } from "../data/user.js";
const userArray = [
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
export const getAllUser = () => {
    return userArray;
};
//# sourceMappingURL=user.js.map
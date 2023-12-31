// // service/user.ts
// import fs from "fs";
// import { IUserArray } from "../data/user.js";

// const filePath = "../data/user.json";

// export const getAllUser = (): Promise<IUserArray[]> => {
//     return new Promise((resolve, reject) => {
//         fs.readFile(filePath, "utf-8", (err, data) => {
//             if (err) {
//                 console.error("Error reading file: ", err);
//                 reject(err);
//                 return;
//             }

//             try {
//                 const allUserData = JSON.parse(data);
//                 console.log(allUserData);
//                 resolve(allUserData);
//             } catch (err) {
//                 console.error("Error parsing JSON", err);
//                 reject(err);
//             }
//         });
//     });
// };

export interface IUserArray {
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

export const getAllUser = ()=>{
    return userArray;
};


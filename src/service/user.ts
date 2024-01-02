import * as User from "../model/user";

//get all users services
export const getAllUser = () => {
    const data = User.getAllUsers();
    return data;
};


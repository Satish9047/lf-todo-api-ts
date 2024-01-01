import * as User from "../model/user";

export const getAllUser = () => {
    const data = User.getAllUsers();
    return data;
};


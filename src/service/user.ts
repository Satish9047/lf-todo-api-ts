import * as User from "../model/user";

export const getAllUser = () => {
    const data = User.getAllUsers();
    return data;
};

export const getLogin = () => {
    const data = User.getLogin();
    return data;
};


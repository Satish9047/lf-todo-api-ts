import * as User from "../model/user";

export interface IregisterCredential {
    name: string;
    email: string;
    password: string;
}

export interface IloginCredential {
    email: string;
    password: string;
}

export const getAllUser = () => {
    const data = User.getAllUsers();
    return data;
};

export const getRegister = (credential: IregisterCredential) => {
    //console.log(credential, "from service user");
    const data = User.getRegister(credential);
    return data;
};

export const getLogin = (credential: IloginCredential) => {
    const data = User.getLogin(credential);
    return data;
};



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

export const getRegister = async (credential: IregisterCredential) => {
    try {
        const data = await User.getRegister(credential);
        console.log(data, "from the return service/user");
        return data;
    } catch (error) {
        console.error("Error in getRegister:", error);
        return { success: false, message: "Internal server error" };
    }
};

export const getLogin = (credential: IloginCredential) => {
    const data = User.getLogin(credential);
    return data;
};



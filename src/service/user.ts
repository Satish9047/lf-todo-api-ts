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
        console.error("Error in Register:", error);
        return { success: false, message: "Internal server error" };
    }
};

export const getLogin = async (credential: IloginCredential) => {
    try {
        const data = await User.getLogin(credential);
        return data;
    } catch (error) {
        console.error("Error in login:", error);
        return { success: false, message: "Internal server error" };
    }
};



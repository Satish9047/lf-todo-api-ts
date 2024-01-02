import * as Auth from "../model/auth";

export interface IregisterCredential {
    name: string;
    email: string;
    password: string;
}

export interface IloginCredential {
    email: string;
    password: string;
}

//get register service
export const getRegister = async (credential: IregisterCredential) => {
    try {
        const data = await Auth.getRegister(credential);
        console.log(data, "from the return service/user");
        return data;
    } catch (error) {
        console.error("Error in Register:", error);
        return { success: false, message: "Internal server error" };
    }
};

//login service
export const getLogin = async (credential: IloginCredential) => {
    try {
        const data = await Auth.getLogin(credential);
        return data;
    } catch (error) {
        console.error("Error in login:", error);
        return { success: false, message: "Internal server error" };
    }
};

//refresh token service
export const getRefreshToken = async (accessToken: string) => {
    try {
        const data = await Auth.getRefreshToken(accessToken);
        return data;
    } catch (error) {
        console.error("Error in token: ", error);
        return { success: false, message: "Internal server error" };
    }
};



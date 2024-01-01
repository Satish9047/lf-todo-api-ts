import { usersArray } from "../data/user";

export const getAllUsers = () => {
    const userData = usersArray.map((user) => {
        return {
            id: user.id,
            name: user.name,
            email: user.email,
        };
    });
    return userData;
};

export const users = [
    {
        id: 1,
        name: "User 1",
        email: "user1@test.com",
        password: "$2b$10$W./GL4g9fKuIyLYzH6BsQe7LzvX2l.uEcintM5LyhQN4miHPfHlwa",
    },
    {
        id: 2,
        name: "User 2",
        email: "user2@test.com",
        password: "$2b$10$sPJYyf75p6V/GPfxBhmNL.vqIlY.o65IYk4CWfpXQWnoW8AIffCEe",
    },
    {
        id: 3,
        name: "User 3",
        email: "user3@test.com",
        password: "$2b$10$tW.NR6oPKAIa6BPRX5fs0eM7Py4rxUbVOysRafdxWp4MULE9wvjVW",
    },
];


export const getAllUsers = () =>{
    const userData = users.map((user)=>{
        return {
            id: user.id,
            name: user.name,
            email: user.email,
        };
    });
    return userData;
};

export const getLogin = (credential:any)=>{
    if(!credential) return "Empty credentials";
    const user = users.find((user)=>{
        return user.email === credential.email && user.password === credential.password;
    });
    if(!user) return "Invalid credentials";
};
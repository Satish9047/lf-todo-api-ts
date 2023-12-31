import userArray from "../data/user.js";
export const userController = (req, res) => {
    console.log(req.headers);
    const data = userArray;
    return res.send(data);
};
// try {
//     const data = userService.getAllUser();
//     return res.json(data);
// } catch (error) {
//     console.error("Error in userController:", error);
//     return res.status(500).json({ error: "Internal Server Error" });
// }
//# sourceMappingURL=user.js.map
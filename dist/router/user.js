import express from "express";
const userRouter = express.Router();
userRouter.get("/user", (req, res) => {
    res.send("you get the user");
});
export default userRouter;
//# sourceMappingURL=user.js.map
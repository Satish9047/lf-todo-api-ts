import express from "express";
const tasksRouter = express.Router();
tasksRouter.get("/tasks", (req, res) => {
    console.log(req.headers);
    res.send("You get the tasks");
});
export default tasksRouter;
//# sourceMappingURL=tasks.js.map
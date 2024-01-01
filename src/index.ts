import express from "express";
import router from "./router";
import cors from "cors";
import config from "./config";

const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    console.log(req.method, req.path);
    next();
});

//route handlers
app.use("/", router);


//listner
app.listen(config.serverPort, (): void => {
    console.log(`Server running on port ${config.serverPort} ....`);
});

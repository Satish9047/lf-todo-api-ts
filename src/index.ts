import express from "express";
import router from "./router";
import cors from "cors";
import config from "./config";
import morgan from "morgan";

const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("combined"));

//route handlers
app.use("/", router);


//listner
app.listen(config.serverPort, (): void => {
    console.log(`Server running on port ${config.serverPort} ....`);
});

import express from "express";
import "dotenv/config";
import router from "./router/index.js";
import cors from "cors";

const app = express();
const port = 3000;

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//route handlers
app.use("/", router);


//listner
app.listen(port, (): void => {
    console.log(`Server running on port ${port}`);
});

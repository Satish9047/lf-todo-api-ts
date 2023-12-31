import express from "express";
import router from "./router/index.js";
import cors from "cors";
import config from "./config.js";
import morgan from "morgan";
const app = express();
//middleware
app.use(cors());
app.use(morgan("common"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//route handlers
app.use("/", router);
//listner
app.listen(config.serverPort, () => {
    console.log(`Server running on port ${config.serverPort} ....`);
});
//# sourceMappingURL=index.js.map
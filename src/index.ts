import express from "express";
import "dotenv/config";

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, (): void => {
    console.log(`Server running on port ${port}`);
});

import fs from "fs";
const filePath = "../data/tasks.ts";
export const getAllTasks = () => {
    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
            console.error("Error reading file:", err);
            return;
        }
        try {
            // Parsing the JSON data
            const allTaskData = JSON.parse(data);
            console.log(allTaskData);
            return allTaskData;
        }
        catch (jsonError) {
            console.error("Error parsing JSON:", jsonError);
        }
    });
};
//# sourceMappingURL=tasks.js.map
import express from "express";
import connectDb from "./src/config/dbConfig.js";
import cors from "cors";
import morgan from "morgan";
const app = express();
const PORT = 8000;

import taskRouter from "./router.js";
connectDb();
app.use(express.json());
app.use(cors());
// app.use(morgan());

app.use("/api/v1/task", taskRouter);
app.use("/", (req, res) => {
  res.json({
    status: "success",
    message: "Task has been added",
    taskLists,
  });
});
app.listen(PORT, (error) => {
  error
    ? console.log("error")
    : console.log(`server is running at http://localhost:${PORT}`);
});

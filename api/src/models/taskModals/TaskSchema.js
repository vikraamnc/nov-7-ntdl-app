import mongoose from "mongoose";

export const taskSchema = new mongoose.Schema({
  task: {
    type: String,
    require: true,
  },
  hr: {
    type: Number,
    require: true,
  },
  type: {
    type: String,
    default: "entry",
  },
});

mongoose.model("Task", taskSchema);

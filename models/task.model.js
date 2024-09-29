import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  completed: {
    type: Boolean,
  },
});

const Task = mongoose.model("Task", taskSchema);

export { Task };

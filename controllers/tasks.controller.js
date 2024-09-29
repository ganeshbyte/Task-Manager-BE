import { Task } from "../models/task.model.js";
import { taskZodSchema } from "../zod/task.schema.js";

export const getAllTasks = async (req, res) => {
  res.send("get all Tasks from the file");
};

export const createTask = async (req, res) => {
  const taskValidation = taskZodSchema.safeParse(req.body);
  const { name, completed } = req.body;

  if (!taskValidation.success) {
    res.status(404).json({
      message: "Invalid Inputs",
    });
    return;
  }

  const task = await Task.create({
    name,
    completed,
  });

  res.status(201).json({ task });
};

export const getTask = async (req, res) => {
  res.send("get single task");
};

export const updateTask = async (req, res) => {
  res.send("update task");
};

export const deleteTask = async (req, res) => {
  res.send("delete Task");
};

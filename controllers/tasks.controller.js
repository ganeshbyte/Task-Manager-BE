import { createCustomError } from "../errors/custom.error.js";
import { asyncWrapper } from "../middlewares/async.js";
import { Task } from "../models/task.model.js";
import { taskZodSchema } from "../zod/task.schema.js";

export const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find();
  if (!tasks) {
    res.status(404).json({
      message: "Task Not Found",
    });
    return;
  }
  res.status(200).json({ data: tasks });
});

export const createTask = asyncWrapper(async (req, res) => {
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
});

export const getTask = asyncWrapper(async (req, res) => {
  const task = await Task.findOne({ _id: req.params.id });
  if (!task) {
    return res.status(404).json({
      message: "Task Not Found",
    });
  }
  res.status(200).json({ data: task });
});

export const updateTask = asyncWrapper(async (req, res) => {
  const taskValidation = taskZodSchema.safeParse(req.body);
  const { name, completed } = req.body;
  const task = await Task.findOneAndUpdate(
    { _id: req.params.id },
    { name, completed },
    { new: true }
  );
  if (!task) {
    return next(createCustomError("Task Not Found", 400));
  }
  res.status(200).json({ data: task });
});

export const deleteTask = asyncWrapper(async (req, res, next) => {
  const task = await Task.findOneAndDelete({ _id: req.params.id });
  if (!task) {
    return next(createCustomError("Task Not Found", 400));
  }
  res.status(200).json({ data: task });
});

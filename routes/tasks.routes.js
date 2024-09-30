import express from "express";
import {
  createTask,
  deleteTask,
  getAllTasks,
  getTask,
  updateTask,
} from "../controllers/tasks.controller.js";
import { idValidationMiddleware } from "../middlewares/tasks.middlware.js";

const router = express.Router();

router.get("/", getAllTasks);
router.post("/", createTask);

router.get("/:id", idValidationMiddleware, getTask);
router.patch("/:id", idValidationMiddleware, updateTask);
router.delete("/:id", idValidationMiddleware, deleteTask);

export default router;

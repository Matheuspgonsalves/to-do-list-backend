import { Router } from "express";
import { createTask } from "../controllers/tasks/createTask.controllers";
import { getTask } from "../controllers/tasks/getTask.controllers";
import { updateTask } from "../controllers/tasks/updateTask.controllers";
import { deleteTask } from "../controllers/tasks/deleteTask.controllers";
import { getTaskByStatus } from "../controllers/tasks/getTaskByStatus.controllers";

const tasks = Router();

tasks.post("/", createTask);
tasks.get("/", getTask);
tasks.get("/getByStatus", getTaskByStatus);
tasks.put("/", updateTask);
tasks.delete("/", deleteTask);

export default tasks;

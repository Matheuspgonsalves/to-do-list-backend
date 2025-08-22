import { Router } from "express";
import { createTask } from "../controllers/tasks/createTask.controllers";
import { getTask } from "../controllers/tasks/getTask.controllers";
import { updateTask } from "../controllers/tasks/updateTask.controllers";

const tasks = Router();

tasks.post("/create", createTask);
tasks.get("/get-task", getTask);
tasks.put("/update-task", updateTask);

export default tasks;
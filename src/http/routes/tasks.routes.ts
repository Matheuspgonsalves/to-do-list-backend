import { Router } from "express";
import { createTask } from "../controllers/tasks/createTask.controllers";
import { getTask } from "../controllers/tasks/getTask.controllers";

const tasks = Router();

tasks.post("/create", createTask);
tasks.get("/get-task", getTask);

export default tasks;
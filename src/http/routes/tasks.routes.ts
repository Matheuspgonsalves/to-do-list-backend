import { Router } from "express";
import { createTask } from "../controllers/tasks/createTask.controllers";

const tasks = Router();

tasks.post("/create", createTask);

export default tasks;
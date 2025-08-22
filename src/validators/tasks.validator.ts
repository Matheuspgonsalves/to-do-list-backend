import joi from "joi";
import { Task } from "../interface/tasks.interface";

export const taskSchema: joi.ObjectSchema<Task> = joi.object({
  task_name: joi.string().required(),
  description: joi.string().default(""),
  status: joi.string().default("pendente"),
  priority: joi.string().required(),
}).unknown(false);

export const taskUpdateSchema: joi.ObjectSchema<Task> = joi.object({
  task_id: joi.string().required(),
  task_name: joi.string().required(),
  description: joi.string().default(""),
  status: joi.string().default("pendente"),
  priority: joi.string().required(),
}).unknown(false);

export const taskDeleteSchema: joi.ObjectSchema<any> = joi.object({
  task_id: joi.string().required(),
}).unknown(false);

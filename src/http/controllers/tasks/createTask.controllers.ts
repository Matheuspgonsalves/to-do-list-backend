import { supabase } from "../../../config/supabase";
import { taskSchema } from "../../../validators/tasks.validator";


export const createTask: any = async (request: any, response: any) => {
  const body: any = request.body;
  const user_id: any = request.jwt.id;
  const taskValidation: any = taskSchema.validate(body);

  if (taskValidation.error) {
    return response.status(400).send({message: taskValidation.error.details[0].message});
  }

  const {task_name, description, status, priority} = taskValidation.value;

  const {data, error} = await supabase
      .from("tasks")
      .insert([
        {
          task_name,
          description,
          status,
          priority,
          user_id
        },
      ]).select();

  if (error) {
    return response.status(500).send({
      message: error.message,
      details: error.details,
    });
  }

  return response.status(201).send({
    message: "OK",
    task: data[0],
  });
} 

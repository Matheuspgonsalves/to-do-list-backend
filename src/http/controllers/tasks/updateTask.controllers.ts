import { supabase } from "../../../config/supabase";
import { taskUpdateSchema } from "../../../validators/tasks.validator";

export const updateTask = async (request: any, response: any) => {
  const body: any = request.body;

  const tasksValidation: any = taskUpdateSchema.validate(body);

  if (tasksValidation.error) {
    return response.status(400).send({message: tasksValidation.error.details[0].message});
  }

  const {task_id, task_name, description, status, priority} = tasksValidation.value;

  const updatedTask: any = await supabase
    .from("tasks")
    .update({
        task_name,
        description,
        status,
        priority,
      })
    .eq("task_id", task_id)
    .select();

  if (!updatedTask.data) {
    return response.status(404).send({message: "Task not found"});
  }

  if (updatedTask.error) {
    return response.status(500).send({
      message: updatedTask.error.message,
      details: updatedTask.error.details,
    });
  }

  return response.status(200).send({message: "OK"});
}

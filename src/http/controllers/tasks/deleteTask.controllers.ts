import { supabase } from "../../../config/supabase";
import { taskDeleteSchema } from "../../../validators/tasks.validator";

export const deleteTask = async (request: any, response: any) => {
  const body: any = request.body;
  const taskValidation = taskDeleteSchema.validate(body);

  if (taskValidation.error) {
    return response.status(400).send({message: taskValidation.error.details[0].message});
  }

  const {task_id} = taskValidation.value;

  const deleteTask: any = await supabase
    .from("tasks")
    .delete()
    .eq("task_id", task_id)
    .select();

  if (!deleteTask.data) {
    return response.status(404).send({message: "Task not found"});
  }

  if (deleteTask.error) {
    return response.status(500).send({
      message: deleteTask.error.message,
      details: deleteTask.error.details
    });
  }

  return response.status(200).send({message: "OK"});
}

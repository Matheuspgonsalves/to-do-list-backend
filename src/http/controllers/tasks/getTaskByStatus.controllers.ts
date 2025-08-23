import { supabase } from "../../../config/supabase";
import { TaskResponse } from "../../../interface/tasks.interface";
import { getTaskByStatusSchema } from "../../../validators/tasks.validator";

export const getTaskByStatus = async (request: any, response: any) => {
  const user_id: string = request.jwt.id;

  const schemaValidation = getTaskByStatusSchema.validate(request.body);

  if (schemaValidation.error) {
    return response.status(400).send({message: schemaValidation.error.details[0].message});
  }

  const {status} = schemaValidation.value;

  const tasksSnapshot: any = await supabase
    .from("tasks")
    .select("*")
    .eq("user_id", user_id)
    .eq("status", status);

  const tasksData: any = tasksSnapshot.data;

  const tasks: TaskResponse[] = [];
  
  if (tasksData.empty) {
    return response.status(200).send({message: "OK", tasks});
  }

  tasksData.forEach(
    (doc: TaskResponse) => {
      tasks.push({
        ...doc
      });
    }
  );
  
  return response.status(200).send({
    message: "OK",
    data: tasks,
  });
}
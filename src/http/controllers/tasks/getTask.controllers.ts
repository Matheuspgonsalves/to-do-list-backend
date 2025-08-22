import { supabase } from "../../../config/supabase";
import { TaskResponse } from "../../../interface/tasks.interface";

export const getTask = async (request: any, response: any) => {
  const user_id: string = request.jwt.id;

  const tasksSnapshot: any = await supabase
    .from("tasks")
    .select("*")
    .eq("user_id", user_id);

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
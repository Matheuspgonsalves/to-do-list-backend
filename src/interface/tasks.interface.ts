export interface Task {
  task_name: string;
  description: string;
  status: string;
  priority: string;
  created_At: any;
  updated_At: any;
  completed_At: any;
  user_id: string;
}

export interface TaskResponse {
  task_name: string;
  description: string;
  status: string;
  priority: string;
}

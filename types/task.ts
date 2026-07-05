export type TaskPriority = "Low" | "Medium" | "High";
export type TaskStatus = "Todo" | "In Progress" | "Done";

export type Task = {
  id: string;
  title: string;
  customerId?: string;
  customerName?: string;
  priority: TaskPriority;
  status: TaskStatus;
  dueDate: string;
};

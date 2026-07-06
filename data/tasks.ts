import { customers } from "@/data/customers";
import type { Task, TaskPriority, TaskStatus } from "@/types/task";

const featuredTasks: Task[] = [
  {
    id: "task-001",
    title: "Follow up with Acme Inc.",
    customerId: "cus-001",
    customerName: "Sarah Johnson",
    priority: "High",
    status: "Todo",
    dueDate: "2026-07-07",
  },
  {
    id: "task-002",
    title: "Prepare proposal for Globex",
    customerId: "cus-002",
    customerName: "Daniel Kim",
    priority: "High",
    status: "In Progress",
    dueDate: "2026-07-10",
  },
  {
    id: "task-003",
    title: "Review monthly pipeline",
    priority: "Medium",
    status: "Todo",
    dueDate: "2026-07-12",
  },
  {
    id: "task-004",
    title: "Send onboarding notes to CloudNova",
    customerId: "cus-005",
    customerName: "Emily Carter",
    priority: "Low",
    status: "Done",
    dueDate: "2026-07-03",
  },
  {
    id: "task-005",
    title: "Schedule discovery call with UrbanGrid",
    customerId: "cus-006",
    customerName: "Lucas Brown",
    priority: "Medium",
    status: "Todo",
    dueDate: "2026-07-09",
  },
];

const taskActions = [
  "Follow up with",
  "Send proposal to",
  "Schedule demo with",
  "Review contract for",
  "Prepare renewal notes for",
  "Confirm next steps with",
  "Share pricing options with",
  "Update account plan for",
];

const priorities: TaskPriority[] = ["Low", "Medium", "High"];
const statuses: TaskStatus[] = ["Todo", "In Progress", "Done"];

function pickItem<T>(items: T[], index: number) {
  return items[index % items.length];
}

function createGeneratedTasks(count: number) {
  return Array.from({ length: count }, (_, index): Task => {
    const taskNumber = index + featuredTasks.length + 1;
    const customer = pickItem(customers, index + 4);
    const action = pickItem(taskActions, index);

    return {
      id: `task-${String(taskNumber).padStart(3, "0")}`,
      title: `${action} ${customer.company}`,
      customerId: customer.id,
      customerName: customer.name,
      priority: pickItem(priorities, index),
      status: pickItem(statuses, index + 1),
      dueDate: `2026-${String((index % 5) + 7).padStart(2, "0")}-${String((index % 25) + 1).padStart(2, "0")}`,
    };
  });
}

const generatedTasks = createGeneratedTasks(45);

export const tasks: Task[] = [...featuredTasks, ...generatedTasks];

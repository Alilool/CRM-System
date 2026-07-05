import type { Task } from "@/types/task";

export const tasks: Task[] = [
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

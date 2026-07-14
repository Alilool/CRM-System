import { deals } from "@/data/deals";
import { tasks } from "@/data/tasks";
import type { Notification } from "@/types/notification";

const highPriorityTasks = tasks
  .filter((task) => task.priority === "High" && task.status !== "Done")
  .slice(0, 3)
  .map(
    (task): Notification => ({
      id: `task-${task.id}`,
      type: "task",
      title: "High priority task",
      description: `${task.title} is due on ${task.dueDate}.`,
      time: task.dueDate,
      isUnread: true,
    }),
  );

const activeDealUpdates = deals
  .filter((deal) => deal.stage === "Proposal" || deal.stage === "Negotiation")
  .slice(0, 3)
  .map(
    (deal): Notification => ({
      id: `deal-${deal.id}`,
      type: "deal",
      title: `${deal.stage} deal update`,
      description: `${deal.title} for ${deal.company} closes on ${deal.closingDate}.`,
      time: deal.closingDate,
      isUnread: true,
    }),
  );

const systemNotifications: Notification[] = [
  {
    id: "system-weekly-report",
    type: "system",
    title: "Weekly report is ready",
    description: "Review customer status, pipeline value, and task progress.",
    time: "Today",
    isUnread: false,
  },
];

export const notifications: Notification[] = [
  ...systemNotifications,
  ...highPriorityTasks,
  ...activeDealUpdates,
];

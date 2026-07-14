export type NotificationType = "task" | "deal" | "system";

export type Notification = {
  id: string;
  type: NotificationType;
  title: string;
  description: string;
  time: string;
  isUnread: boolean;
};

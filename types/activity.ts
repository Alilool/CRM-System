export type ActivityType = "Call" | "Email" | "Meeting" | "Note";

export type Activity = {
  id: string;
  customerId: string;
  type: ActivityType;
  title: string;
  description: string;
  date: string;
};

export type Note = {
  id: string;
  customerId: string;
  author: string;
  content: string;
  date: string;
};

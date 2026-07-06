import type { Activity, Note } from "@/types/activity";

export const activities: Activity[] = [
  {
    id: "act-001",
    customerId: "cus-001",
    type: "Call",
    title: "Pricing call completed",
    description: "Discussed annual package needs and renewal timing.",
    date: "2026-07-01",
  },
  {
    id: "act-002",
    customerId: "cus-002",
    type: "Email",
    title: "Proposal requested",
    description: "Daniel asked for a proposal with team onboarding options.",
    date: "2026-07-02",
  },
  {
    id: "act-003",
    customerId: "cus-003",
    type: "Meeting",
    title: "Product demo",
    description: "Showed analytics workspace and reporting dashboard.",
    date: "2026-06-29",
  },
  {
    id: "act-004",
    customerId: "cus-005",
    type: "Note",
    title: "Renewal approved",
    description: "CloudNova approved renewal and requested onboarding notes.",
    date: "2026-06-28",
  },
];

export const notes: Note[] = [
  {
    id: "note-001",
    customerId: "cus-001",
    author: "Alex Morgan",
    content: "Sarah prefers email follow-ups after pricing calls.",
    date: "2026-07-01",
  },
  {
    id: "note-002",
    customerId: "cus-002",
    author: "Alex Morgan",
    content: "Globex is comparing onboarding timelines with another vendor.",
    date: "2026-07-02",
  },
  {
    id: "note-003",
    customerId: "cus-005",
    author: "Jamie Lee",
    content:
      "CloudNova wants the renewal summary before the next finance review.",
    date: "2026-06-27",
  },
];

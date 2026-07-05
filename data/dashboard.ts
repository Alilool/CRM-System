import type { ChartBar, DashboardSummaryCard } from "@/types/dashboard";

export const summaryCards: DashboardSummaryCard[] = [
  { title: "Total Customers", value: "1,248", change: "+12% this month" },
  { title: "Active Deals", value: "32", change: "8 closing soon" },
  { title: "Revenue", value: "$84,520", change: "+18% vs last month" },
  { title: "Tasks", value: "18", change: "5 due today" },
];

export const salesChartBars: ChartBar[] = [
  { label: "W1", height: "45%" },
  { label: "W2", height: "70%" },
  { label: "W3", height: "52%" },
  { label: "W4", height: "82%" },
  { label: "W5", height: "64%" },
  { label: "W6", height: "88%" },
  { label: "W7", height: "100%" },
];

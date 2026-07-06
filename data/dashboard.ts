import type { ChartBar, DashboardSummaryCard } from "@/types/dashboard";
import { customers } from "@/data/customers";
import { deals } from "@/data/deals";
import { tasks } from "@/data/tasks";

const activeCustomers = customers.filter(
  (customer) => customer.status === "Active",
);

const activeDeals = deals.filter(
  (deal) => deal.stage !== "Won" && deal.stage !== "Lost",
);

const wonDeals = deals.filter((deal) => deal.stage === "Won");

const finishedTasks = tasks.filter((task) => task.status === "Done");

const revenue = wonDeals.reduce((total, deal) => total + deal.value, 0);

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

export const summaryCards: DashboardSummaryCard[] = [
  {
    title: "Total Customers",
    value: customers.length.toString(),
    change: `${activeCustomers.length} Active customers`,
  },
  {
    title: "Active Deals",
    value: activeDeals.length.toString(),
    change: `${wonDeals.length} Won deals`,
  },
  {
    title: "Revenue",
    value: formatCurrency(revenue),
    change: "From won deals",
  },
  {
    title: "Tasks",
    value: tasks.length.toString(),
    change: `${finishedTasks.length} Completed tasks`,
  },
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

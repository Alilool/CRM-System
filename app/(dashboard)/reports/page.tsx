import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { customers } from "@/data/customers";
import { deals } from "@/data/deals";
import { tasks } from "@/data/tasks";
import type { CustomerStatus } from "@/types/customer";
import type { DealStage } from "@/types/deal";
import type { TaskStatus } from "@/types/task";

const customerStatuses: CustomerStatus[] = ["Active", "Lead", "Inactive"];
const dealStages: DealStage[] = [
  "Lead",
  "Contacted",
  "Proposal",
  "Negotiation",
  "Won",
  "Lost",
];
const taskStatuses: TaskStatus[] = ["Todo", "In Progress", "Done"];

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

function countCustomersByStatus(status: CustomerStatus) {
  return customers.filter((customer) => customer.status === status).length;
}

function getDealsByStage(stage: DealStage) {
  return deals.filter((deal) => deal.stage === stage);
}

function getDealStageValue(stage: DealStage) {
  return getDealsByStage(stage).reduce((total, deal) => total + deal.value, 0);
}

function countTasksByStatus(status: TaskStatus) {
  return tasks.filter((task) => task.status === status).length;
}

function getAgentReports() {
  const agentNames = Array.from(
    new Set(customers.map((customer) => customer.agent)),
  );

  return agentNames.map((agent) => ({
    agent,
    customers: customers.filter((customer) => customer.agent === agent).length,
    activeCustomers: customers.filter(
      (customer) => customer.agent === agent && customer.status === "Active",
    ).length,
  }));
}

export default function ReportsPage() {
  const wonRevenue = getDealStageValue("Won");
  const activeDeals = deals.filter(
    (deal) => deal.stage !== "Won" && deal.stage !== "Lost",
  ).length;
  const completedTasks = countTasksByStatus("Done");
  const taskCompletionRate = Math.round((completedTasks / tasks.length) * 100);
  const agentReports = getAgentReports();

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2 rounded-md border border-border bg-card p-5 shadow-sm sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-medium text-primary">Performance view</p>
          <h2 className="text-2xl font-semibold">Reports</h2>
        </div>
        <p className="max-w-md text-sm text-muted-foreground">
          Review customer health, pipeline value, task progress, and sales team
          ownership from the mock CRM data.
        </p>
      </div>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm text-muted-foreground">
              Total Customers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold">{customers.length}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm text-muted-foreground">
              Active Deals
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold">{activeDeals}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm text-muted-foreground">
              Won Revenue
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold">
              {formatCurrency(wonRevenue)}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm text-muted-foreground">
              Task Completion
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold">{taskCompletionRate}%</p>
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-4 xl:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Customer Status</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {customerStatuses.map((status) => (
              <div
                key={status}
                className="flex items-center justify-between gap-4 rounded-md border border-border bg-muted/30 p-4"
              >
                <span className="font-medium">{status}</span>
                <Badge variant="secondary">
                  {countCustomersByStatus(status)}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Task Status</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {taskStatuses.map((status) => (
              <div
                key={status}
                className="flex items-center justify-between gap-4 rounded-md border border-border bg-muted/30 p-4"
              >
                <span className="font-medium">{status}</span>
                <Badge variant="secondary">{countTasksByStatus(status)}</Badge>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-4 xl:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Pipeline Value By Stage</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {dealStages.map((stage) => (
              <div
                key={stage}
                className="rounded-md border border-border bg-muted/30 p-4"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="font-medium">{stage}</span>
                  <Badge variant="secondary">
                    {getDealsByStage(stage).length}
                  </Badge>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {formatCurrency(getDealStageValue(stage))}
                </p>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Sales Team Ownership</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {agentReports.map((report) => (
              <div
                key={report.agent}
                className="rounded-md border border-border bg-muted/30 p-4 transition-colors hover:bg-muted/50"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="font-medium">{report.agent}</span>
                  <Badge variant="secondary">{report.customers}</Badge>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {report.activeCustomers} active customers assigned
                </p>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>
    </div>
  );
}

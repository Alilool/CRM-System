import Link from "next/link";
import { notFound } from "next/navigation";

import { EmptyState } from "@/components/common/empty-state";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { activities, notes } from "@/data/activities";
import { companies, customers } from "@/data/customers";
import { deals } from "@/data/deals";
import { tasks } from "@/data/tasks";
import type { CustomerStatus } from "@/types/customer";
import type { DealStage } from "@/types/deal";
import type { TaskPriority, TaskStatus } from "@/types/task";

function getCustomerStatusVariant(status: CustomerStatus) {
  if (status === "Active") {
    return "success";
  }

  if (status === "Lead") {
    return "info";
  }

  return "secondary";
}

function getDealStageVariant(stage: DealStage) {
  if (stage === "Won") {
    return "success";
  }

  if (stage === "Lost") {
    return "danger";
  }

  if (stage === "Negotiation" || stage === "Proposal") {
    return "warning";
  }

  return "info";
}

function getTaskPriorityVariant(priority: TaskPriority) {
  if (priority === "High") {
    return "danger";
  }

  if (priority === "Medium") {
    return "warning";
  }

  return "secondary";
}

function getTaskStatusVariant(status: TaskStatus) {
  if (status === "Done") {
    return "success";
  }

  if (status === "In Progress") {
    return "info";
  }

  return "secondary";
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

export function generateStaticParams() {
  return customers.map((customer) => ({
    id: customer.id,
  }));
}

export default async function CustomerDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const customer = customers.find((item) => item.id === id);

  if (!customer) {
    notFound();
  }

  const company = companies.find((item) => item.customerId === customer.id);
  const customerDeals = deals.filter((deal) => deal.customerId === customer.id);
  const customerTasks = tasks.filter((task) => task.customerId === customer.id);
  const customerActivities = activities.filter(
    (activity) => activity.customerId === customer.id,
  );
  const customerNotes = notes.filter((note) => note.customerId === customer.id);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 rounded-md border border-border bg-card p-5 shadow-sm">
        <div>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href="/customers"
              className="inline-flex text-sm font-medium text-primary hover:underline"
            >
              Back to customers
            </Link>
            <p className="text-xs text-muted-foreground lg:text-sm">
              Managed by {customer.agent}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <h2 className="text-2xl font-semibold">{customer.name}</h2>
            <Badge variant={getCustomerStatusVariant(customer.status)}>
              {customer.status}
            </Badge>
          </div>
          <p className="mt-1 text-sm text-muted-foreground">
            {customer.jobTitle} at {customer.company}
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Joined {customer.joinedDate}
          </p>
        </div>
      </div>

      <section className="grid gap-4 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Customer Information</CardTitle>
            <CardDescription>Main contact details.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <div className="flex justify-between gap-4">
              <span className="text-muted-foreground">Email</span>
              <span className="min-w-0 text-right break-all">
                {customer.email}
              </span>
            </div>
            <div className="flex justify-between gap-4">
              <span className="text-muted-foreground">Phone</span>
              <span className="text-right">{customer.phone}</span>
            </div>
            <div className="flex justify-between gap-4">
              <span className="text-muted-foreground">Location</span>
              <span className="text-right">{customer.location}</span>
            </div>
            <div className="flex justify-between gap-4">
              <span className="text-muted-foreground">Agent</span>
              <span className="text-right">{customer.agent}</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Company Information</CardTitle>
            <CardDescription>Business profile.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <div className="flex justify-between gap-4">
              <span className="text-muted-foreground">Company</span>
              <span className="text-right">
                {company?.name ?? customer.company}
              </span>
            </div>
            <div className="flex justify-between gap-4">
              <span className="text-muted-foreground">Industry</span>
              <span className="text-right">
                {company?.industry ?? "Unknown"}
              </span>
            </div>
            <div className="flex justify-between gap-4">
              <span className="text-muted-foreground">Employees</span>
              <span className="text-right">
                {company?.employees ?? "Unknown"}
              </span>
            </div>
            <div className="flex justify-between gap-4">
              <span className="text-muted-foreground">Website</span>
              <span className="min-w-0 text-right break-all">
                {company?.website ?? "Unknown"}
              </span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Open Work</CardTitle>
            <CardDescription>
              Deals and tasks linked to this customer.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <div className="flex justify-between gap-4">
              <span className="text-muted-foreground">Current deals</span>
              <span>{customerDeals.length}</span>
            </div>
            <div className="flex justify-between gap-4">
              <span className="text-muted-foreground">Tasks</span>
              <span>{customerTasks.length}</span>
            </div>
            <div className="flex justify-between gap-4">
              <span className="text-muted-foreground">Activities</span>
              <span>{customerActivities.length}</span>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-4 xl:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Current Deals</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {customerDeals.length === 0 ? (
              <EmptyState
                title="No deals found"
                description="No deals are linked to this customer yet."
              />
            ) : (
              customerDeals.slice(0, 5).map((deal) => (
                <div
                  key={deal.id}
                  className="rounded-md border border-border bg-muted/40 p-4"
                >
                  <div className="mb-2 flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="font-medium wrap-break-word">
                        {deal.title}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Closing {deal.closingDate}
                      </p>
                    </div>
                    <Badge variant={getDealStageVariant(deal.stage)}>
                      {deal.stage}
                    </Badge>
                  </div>
                  <p className="text-sm font-medium">
                    {formatCurrency(deal.value)}
                  </p>
                </div>
              ))
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Tasks</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {customerTasks.length === 0 ? (
              <EmptyState
                title="No tasks found"
                description="No tasks are linked to this customer yet."
              />
            ) : (
              customerTasks.slice(0, 5).map((task) => (
                <div
                  key={task.id}
                  className="rounded-md border border-border bg-muted/40 p-4"
                >
                  <div className="mb-2 flex items-start justify-between gap-3">
                    <p className="min-w-0 font-medium wrap-break-word">
                      {task.title}
                    </p>
                    <Badge variant={getTaskPriorityVariant(task.priority)}>
                      {task.priority}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between gap-3 text-sm text-muted-foreground">
                    <span>Due {task.dueDate}</span>
                    <Badge variant={getTaskStatusVariant(task.status)}>
                      {task.status}
                    </Badge>
                  </div>
                </div>
              ))
            )}
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-4 xl:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {customerActivities.length === 0 ? (
              <EmptyState
                title="No activities found"
                description="No recent activities are linked to this customer."
              />
            ) : (
              customerActivities.map((activity) => (
                <div
                  key={activity.id}
                  className="rounded-md border border-border bg-muted/40 p-4"
                >
                  <div className="mb-2 flex items-start justify-between gap-3">
                    <p className="min-w-0 font-medium wrap-break-word ">
                      {activity.title}
                    </p>
                    <Badge variant="info">{activity.type}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {activity.description}
                  </p>
                  <p className="mt-3 text-xs text-muted-foreground">
                    {activity.date}
                  </p>
                </div>
              ))
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Notes</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {customerNotes.length === 0 ? (
              <EmptyState
                title="No notes found"
                description="No notes are linked to this customer."
              />
            ) : (
              customerNotes.map((note) => (
                <div
                  key={note.id}
                  className="rounded-md border border-border bg-muted/40 p-4"
                >
                  <div className="mb-2 flex items-center justify-between gap-3">
                    <p className="min-w-0 font-medium wrap-break-word">
                      {note.author}
                    </p>
                    <p className="text-xs text-muted-foreground">{note.date}</p>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {note.content}
                  </p>
                </div>
              ))
            )}
          </CardContent>
        </Card>
      </section>
    </div>
  );
}

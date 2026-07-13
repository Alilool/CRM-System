import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { tasks } from "@/data/tasks";
import type { TaskPriority, TaskStatus } from "@/types/task";

function getPriorityVariant(priority: TaskPriority) {
  if (priority === "High") {
    return "danger";
  }

  if (priority === "Medium") {
    return "warning";
  }

  return "secondary";
}

function getStatusVariant(status: TaskStatus) {
  if (status === "Done") {
    return "success";
  }

  if (status === "In Progress") {
    return "info";
  }

  return "secondary";
}

function countTasksByStatus(status: TaskStatus) {
  return tasks.filter((task) => task.status === status).length;
}

export default function TasksPage() {
  const todoTasks = countTasksByStatus("Todo");
  const inProgressTasks = countTasksByStatus("In Progress");
  const doneTasks = countTasksByStatus("Done");

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2 rounded-md border border-border bg-card p-5 shadow-sm sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-medium text-primary">Work queue</p>
          <h2 className="text-2xl font-semibold">Tasks</h2>
        </div>
        <p className="max-w-md text-sm text-muted-foreground">
          Track follow-ups, proposals, calls, and account work across your
          customer list.
        </p>
      </div>

      <section className="grid gap-4 sm:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm text-muted-foreground">
              Todo
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold">{todoTasks}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm text-muted-foreground">
              In Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold">{inProgressTasks}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm text-muted-foreground">
              Done
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold">{doneTasks}</p>
          </CardContent>
        </Card>
      </section>

      <Card>
        <CardHeader>
          <CardTitle>Task List</CardTitle>
          <CardDescription>
            Showing {tasks.length} tasks from the mock CRM workspace.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 lg:grid-cols-2">
            {tasks.map((task) => (
              <div
                key={task.id}
                className="rounded-md border border-border bg-muted/40 p-4 transition-colors hover:border-primary/40 hover:bg-muted/70"
              >
                <div className="mb-3 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="font-medium">{task.title}</p>
                    {task.customerId && task.customerName ? (
                      <Link
                        href={`/customers/${task.customerId}`}
                        className="mt-1 inline-flex text-sm font-medium text-primary hover:underline"
                      >
                        {task.customerName}
                      </Link>
                    ) : (
                      <p className="mt-1 text-sm text-muted-foreground">
                        Internal task
                      </p>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2 sm:justify-end">
                    <Badge variant={getPriorityVariant(task.priority)}>
                      {task.priority}
                    </Badge>
                    <Badge variant={getStatusVariant(task.status)}>
                      {task.status}
                    </Badge>
                  </div>
                </div>

                <div className="flex justify-between gap-4 text-sm">
                  <span className="text-muted-foreground">Due date</span>
                  <span>{task.dueDate}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

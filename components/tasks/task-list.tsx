"use client";

import Link from "next/link";
import { useState } from "react";

import { EmptyState } from "@/components/common/empty-state";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import type { Task, TaskPriority, TaskStatus } from "@/types/task";

type TaskListProps = {
  tasks: Task[];
};

type StatusFilter = "All" | TaskStatus;
type PriorityFilter = "All" | TaskPriority;

const statusOptions: StatusFilter[] = ["All", "Todo", "In Progress", "Done"];
const priorityOptions: PriorityFilter[] = ["All", "Low", "Medium", "High"];

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

function taskMatchesSearch(task: Task, searchTerm: string) {
  const searchValue = searchTerm.toLowerCase();
  const customerName = task.customerName ?? "Internal task";

  return (
    task.title.toLowerCase().includes(searchValue) ||
    customerName.toLowerCase().includes(searchValue)
  );
}

function TaskList({ tasks }: TaskListProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("All");
  const [priorityFilter, setPriorityFilter] = useState<PriorityFilter>("All");

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = taskMatchesSearch(task, searchTerm);
    const matchesStatus =
      statusFilter === "All" || task.status === statusFilter;
    const matchesPriority =
      priorityFilter === "All" || task.priority === priorityFilter;

    return matchesSearch && matchesStatus && matchesPriority;
  });

  function clearFilters() {
    setSearchTerm("");
    setStatusFilter("All");
    setPriorityFilter("All");
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Task List</CardTitle>
        <CardDescription>
          Showing {filteredTasks.length} of {tasks.length} tasks.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-5 grid gap-3 lg:grid-cols-[1fr_160px_160px_auto]">
          <Input
            type="search"
            placeholder="Search by task or customer"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />

          <select
            value={statusFilter}
            onChange={(event) =>
              setStatusFilter(event.target.value as StatusFilter)
            }
            className="h-9 rounded-md border border-input bg-background px-3 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/40"
          >
            {statusOptions.map((status) => (
              <option key={status} value={status}>
                Status: {status}
              </option>
            ))}
          </select>

          <select
            value={priorityFilter}
            onChange={(event) =>
              setPriorityFilter(event.target.value as PriorityFilter)
            }
            className="h-9 rounded-md border border-input bg-background px-3 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/40"
          >
            {priorityOptions.map((priority) => (
              <option key={priority} value={priority}>
                Priority: {priority}
              </option>
            ))}
          </select>

          <Button variant="outline" onClick={clearFilters}>
            Clear
          </Button>
        </div>

        {filteredTasks.length === 0 ? (
          <EmptyState
            title="No tasks found"
            description="Try a different search term, status, or priority."
          />
        ) : (
          <div className="grid gap-3 lg:grid-cols-2">
            {filteredTasks.map((task) => (
              <div
                key={task.id}
                className="rounded-md border border-border bg-muted/40 p-4 transition-colors hover:border-primary/40 hover:bg-muted/70"
              >
                <div className="mb-3 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0">
                    <p className="font-medium break-words">{task.title}</p>
                    {task.customerId && task.customerName ? (
                      <Link
                        href={`/customers/${task.customerId}`}
                        className="mt-1 inline-flex text-sm font-medium text-primary break-words hover:underline"
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
        )}
      </CardContent>
    </Card>
  );
}

export { TaskList };

import { TaskList } from "@/components/tasks/task-list";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { tasks } from "@/data/tasks";
import type { TaskStatus } from "@/types/task";

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

      <TaskList tasks={tasks} />
    </div>
  );
}

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { activities } from "@/data/activities";
import { salesChartBars, summaryCards } from "@/data/dashboard";
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

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2 rounded-md border border-border bg-card p-5 shadow-sm sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-medium text-primary">Sales overview</p>
          <h2 className="text-2xl font-semibold">Dashboard</h2>
        </div>
        <p className="max-w-md text-sm text-muted-foreground">
          Track customers, deals, revenue, and tasks from one focused workspace.
        </p>
      </div>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {summaryCards.map((card) => (
          <Card key={card.title} className="overflow-hidden">
            <div className="h-1 bg-primary" />
            <CardHeader>
              <CardTitle className="text-sm text-muted-foreground">
                {card.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-semibold">{card.value}</p>
              <p className="mt-1 text-xs text-muted-foreground">
                {card.change}
              </p>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Sales Chart</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex h-64 gap-3 rounded-md border border-border bg-muted/40 p-4">
              <div className="flex h-52 flex-col justify-between text-xs text-muted-foreground">
                <span>$100k</span>
                <span>$75k</span>
                <span>$50k</span>
                <span>$25k</span>
                <span>$0</span>
              </div>

              <div className="flex flex-1 gap-3">
                {salesChartBars.map((bar) => (
                  <div
                    key={bar.label}
                    className="flex flex-1 flex-col items-center justify-end gap-2"
                  >
                    <div className="flex h-52 w-full items-end border-b border-border">
                      <div
                        className="w-full rounded-t-md bg-primary/80"
                        style={{ height: bar.height }}
                      />
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {bar.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Upcoming Tasks</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-sm">
              {tasks
                .filter((task) => task.status !== "Done")
                .slice(0, 6)
                .map((task) => (
                  <div key={task.id} className="rounded-md bg-muted/60 p-3">
                    <div className="mb-2 flex items-center justify-between gap-2">
                      <p>{task.title}</p>
                      <Badge variant={getPriorityVariant(task.priority)}>
                        {task.priority}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between gap-2 text-xs text-muted-foreground">
                      <span>Due {task.dueDate}</span>
                      <Badge variant={getStatusVariant(task.status)}>
                        {task.status}
                      </Badge>
                    </div>
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>
      </section>

      <Card>
        <CardHeader>
          <CardTitle>Recent Activities</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 md:grid-cols-2">
            {activities.map((activity) => (
              <div
                key={activity.id}
                className="rounded-md border border-border bg-muted/40 p-4"
              >
                <div className="mb-2 flex items-center justify-between gap-3">
                  <p className="font-medium">{activity.title}</p>
                  <Badge variant="info">{activity.type}</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  {activity.description}
                </p>
                <p className="mt-3 text-xs text-muted-foreground">
                  {activity.date}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

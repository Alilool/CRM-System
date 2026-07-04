import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const summaryCards = [
  { title: "Total Customers", value: "1,248", change: "+12% this month" },
  { title: "Active Deals", value: "32", change: "8 closing soon" },
  { title: "Revenue", value: "$84,520", change: "+18% vs last month" },
  { title: "Tasks", value: "18", change: "5 due today" },
];

const chartBars = ["45%", "70%", "52%", "82%", "64%", "88%", "76%"];

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
            <div className="flex h-64 items-end gap-3 rounded-md border border-border bg-muted/40 p-4">
              {chartBars.map((height, index) => (
                <div
                  key={height + index}
                  className="flex flex-1 flex-col items-center gap-2"
                >
                  <div
                    className="w-full rounded-t-md bg-primary/80"
                    style={{ height }}
                  />
                  <span className="text-xs text-muted-foreground">
                    W{index + 1}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Upcoming Tasks</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-sm">
              <p className="rounded-md bg-muted/60 p-3">Follow up with Acme Inc.</p>
              <p className="rounded-md bg-muted/60 p-3">Prepare proposal for Globex</p>
              <p className="rounded-md bg-muted/60 p-3">Review monthly pipeline</p>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}

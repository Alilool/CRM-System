import { LoadingSkeleton } from "@/components/common/loading-skeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function TasksLoading() {
  return (
    <div className="space-y-6">
      <div className="rounded-md border border-border bg-card p-5 shadow-sm">
        <LoadingSkeleton className="h-4 w-28" />
        <LoadingSkeleton className="mt-3 h-8 w-28" />
        <LoadingSkeleton className="mt-3 h-4 w-full max-w-md" />
      </div>

      <section className="grid gap-4 sm:grid-cols-3">
        {Array.from({ length: 3 }).map((_, index) => (
          <Card key={index}>
            <CardHeader>
              <LoadingSkeleton className="h-4 w-28" />
            </CardHeader>
            <CardContent>
              <LoadingSkeleton className="h-8 w-12" />
            </CardContent>
          </Card>
        ))}
      </section>

      <Card>
        <CardHeader>
          <LoadingSkeleton className="h-5 w-28" />
          <LoadingSkeleton className="h-4 w-52" />
        </CardHeader>
        <CardContent className="space-y-3">
          <LoadingSkeleton className="h-9 w-full" />
          <div className="grid gap-3 lg:grid-cols-2">
            {Array.from({ length: 6 }).map((_, index) => (
              <LoadingSkeleton key={index} className="h-28 w-full" />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

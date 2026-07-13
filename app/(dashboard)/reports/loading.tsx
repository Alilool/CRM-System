import { LoadingSkeleton } from "@/components/common/loading-skeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function ReportsLoading() {
  return (
    <div className="space-y-6">
      <div className="rounded-md border border-border bg-card p-5 shadow-sm">
        <LoadingSkeleton className="h-4 w-36" />
        <LoadingSkeleton className="mt-3 h-8 w-32" />
        <LoadingSkeleton className="mt-3 h-4 w-full max-w-md" />
      </div>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <Card key={index}>
            <CardHeader>
              <LoadingSkeleton className="h-4 w-32" />
            </CardHeader>
            <CardContent>
              <LoadingSkeleton className="h-8 w-24" />
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="grid gap-4 xl:grid-cols-2">
        {Array.from({ length: 4 }).map((_, index) => (
          <Card key={index}>
            <CardHeader>
              <LoadingSkeleton className="h-5 w-40" />
            </CardHeader>
            <CardContent className="space-y-3">
              <LoadingSkeleton className="h-16 w-full" />
              <LoadingSkeleton className="h-16 w-full" />
              <LoadingSkeleton className="h-16 w-full" />
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
}

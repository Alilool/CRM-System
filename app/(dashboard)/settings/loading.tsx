import { LoadingSkeleton } from "@/components/common/loading-skeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function SettingsLoading() {
  return (
    <div className="space-y-6">
      <div className="rounded-md border border-border bg-card p-5 shadow-sm">
        <LoadingSkeleton className="h-4 w-36" />
        <LoadingSkeleton className="mt-3 h-8 w-32" />
        <LoadingSkeleton className="mt-3 h-4 w-full max-w-md" />
      </div>

      <Card>
        <CardHeader>
          <LoadingSkeleton className="h-5 w-36" />
          <LoadingSkeleton className="h-4 w-56" />
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="rounded-md border border-border bg-muted/30 p-4"
            >
              <LoadingSkeleton className="h-4 w-16" />
              <LoadingSkeleton className="mt-2 h-5 w-32" />
            </div>
          ))}
        </CardContent>
      </Card>

      <section className="grid gap-4 lg:grid-cols-2">
        {Array.from({ length: 2 }).map((_, index) => (
          <Card key={index}>
            <CardHeader>
              <LoadingSkeleton className="h-5 w-40" />
              <LoadingSkeleton className="h-4 w-64 max-w-full" />
            </CardHeader>
            <CardContent className="space-y-4">
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

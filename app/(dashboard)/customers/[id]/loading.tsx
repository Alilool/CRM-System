import { LoadingSkeleton } from "@/components/common/loading-skeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function CustomerDetailsLoading() {
  return (
    <div className="space-y-6">
      <div className="rounded-md border border-border bg-card p-5 shadow-sm">
        <LoadingSkeleton className="h-4 w-32" />
        <LoadingSkeleton className="mt-3 h-8 w-56" />
        <LoadingSkeleton className="mt-3 h-4 w-72" />
      </div>

      <section className="grid gap-4 lg:grid-cols-3">
        {Array.from({ length: 3 }).map((_, index) => (
          <Card key={index}>
            <CardHeader>
              <LoadingSkeleton className="h-5 w-40" />
              <LoadingSkeleton className="h-4 w-32" />
            </CardHeader>
            <CardContent className="space-y-3">
              <LoadingSkeleton className="h-4 w-full" />
              <LoadingSkeleton className="h-4 w-5/6" />
              <LoadingSkeleton className="h-4 w-4/6" />
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="grid gap-4 xl:grid-cols-2">
        {Array.from({ length: 2 }).map((_, index) => (
          <Card key={index}>
            <CardHeader>
              <LoadingSkeleton className="h-5 w-32" />
            </CardHeader>
            <CardContent className="space-y-3">
              <LoadingSkeleton className="h-20 w-full" />
              <LoadingSkeleton className="h-20 w-full" />
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
}

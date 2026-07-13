import { LoadingSkeleton } from "@/components/common/loading-skeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function DealsLoading() {
  return (
    <div className="space-y-6">
      <div className="rounded-md border border-border bg-card p-5 shadow-sm">
        <LoadingSkeleton className="h-4 w-32" />
        <LoadingSkeleton className="mt-3 h-8 w-32" />
        <LoadingSkeleton className="mt-3 h-4 w-full max-w-md" />
      </div>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6">
        {Array.from({ length: 6 }).map((_, index) => (
          <Card key={index} className="min-h-96">
            <CardHeader>
              <LoadingSkeleton className="h-5 w-24" />
              <LoadingSkeleton className="h-4 w-20" />
              <LoadingSkeleton className="h-4 w-28" />
            </CardHeader>
            <CardContent className="space-y-3">
              {Array.from({ length: 3 }).map((__, cardIndex) => (
                <LoadingSkeleton key={cardIndex} className="h-32 w-full" />
              ))}
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
}

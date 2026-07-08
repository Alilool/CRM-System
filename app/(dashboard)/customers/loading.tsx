import { LoadingSkeleton } from "@/components/common/loading-skeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function CustomersLoading() {
  return (
    <div className="space-y-6">
      <div className="rounded-md border border-border bg-card p-5 shadow-sm">
        <LoadingSkeleton className="h-4 w-32" />
        <LoadingSkeleton className="mt-3 h-8 w-48" />
        <LoadingSkeleton className="mt-3 h-4 w-full max-w-md" />
      </div>

      <Card>
        <CardHeader>
          <LoadingSkeleton className="h-6 w-36" />
          <LoadingSkeleton className="h-4 w-56" />
        </CardHeader>
        <CardContent className="space-y-3">
          <LoadingSkeleton className="h-9 w-full" />
          {Array.from({ length: 6 }).map((_, index) => (
            <LoadingSkeleton key={index} className="h-14 w-full" />
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

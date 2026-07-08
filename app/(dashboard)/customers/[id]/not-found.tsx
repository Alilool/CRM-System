import Link from "next/link";

import { EmptyState } from "@/components/common/empty-state";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CustomerNotFound() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <p className="text-sm font-medium text-primary">404</p>
          <CardTitle className="text-2xl">Customer not found</CardTitle>
        </CardHeader>
        <CardContent>
          <EmptyState
            title="Invalid customer"
            description="The customer you are looking for does not exist or is not available in the mock CRM data."
            action={
              <Link
                href="/customers"
                className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Back to customers
              </Link>
            }
          />
        </CardContent>
      </Card>
    </div>
  );
}

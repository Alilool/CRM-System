import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { deals } from "@/data/deals";
import type { Deal, DealStage } from "@/types/deal";

const dealStages: DealStage[] = [
  "Lead",
  "Contacted",
  "Proposal",
  "Negotiation",
  "Won",
  "Lost",
];

function getStageVariant(stage: DealStage) {
  if (stage === "Won") {
    return "success";
  }

  if (stage === "Lost") {
    return "danger";
  }

  if (stage === "Negotiation" || stage === "Proposal") {
    return "warning";
  }

  return "info";
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

function getDealsByStage(stage: DealStage) {
  return deals.filter((deal) => deal.stage === stage);
}

function getStageValue(stageDeals: Deal[]) {
  return stageDeals.reduce((total, deal) => total + deal.value, 0);
}

export default function DealsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2 rounded-md border border-border bg-card p-5 shadow-sm sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-medium text-primary">Sales pipeline</p>
          <h2 className="text-2xl font-semibold">Deals</h2>
        </div>
        <p className="max-w-md text-sm text-muted-foreground">
          Review every deal by stage, customer, value, and expected closing
          date.
        </p>
      </div>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6">
        {dealStages.map((stage) => {
          const stageDeals = getDealsByStage(stage);

          return (
            <Card
              key={stage}
              className="flex min-h-96 flex-col overflow-hidden"
            >
              <CardHeader>
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <CardTitle>{stage}</CardTitle>
                    <CardDescription>{stageDeals.length} deals</CardDescription>
                  </div>
                  <Badge variant={getStageVariant(stage)}>{stage}</Badge>
                </div>
                <p className="pt-2 text-sm font-medium text-foreground">
                  {formatCurrency(getStageValue(stageDeals))}
                </p>
              </CardHeader>

              <CardContent className="flex max-h-128 flex-1 flex-col gap-3 overflow-y-auto pr-3">
                {stageDeals.map((deal) => (
                  <div
                    key={deal.id}
                    className="rounded-md border border-border bg-muted/40 p-4 transition-colors hover:border-primary/40 hover:bg-muted/70"
                  >
                    <div className="mb-3">
                      <p className="text-sm font-medium leading-5">
                        {deal.title}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {deal.company}
                      </p>
                    </div>

                    <div className="space-y-2 text-sm">
                      <div className="flex flex-col gap-1 sm:flex-row sm:justify-between sm:gap-4">
                        <span className="text-muted-foreground">Customer</span>
                        <Link
                          href={`/customers/${deal.customerId}`}
                          className="font-medium text-primary hover:underline sm:text-right"
                        >
                          {deal.customerName}
                        </Link>
                      </div>
                      <div className="flex justify-between gap-4">
                        <span className="text-muted-foreground">Value</span>
                        <span className="font-medium">
                          {formatCurrency(deal.value)}
                        </span>
                      </div>
                      <div className="flex justify-between gap-4">
                        <span className="text-muted-foreground">Closing</span>
                        <span>{deal.closingDate}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          );
        })}
      </section>
    </div>
  );
}

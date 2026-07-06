import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { customers } from "@/data/customers";
import type { CustomerStatus } from "@/types/customer";

function getStatusVariant(status: CustomerStatus) {
  if (status === "Active") {
    return "success";
  }

  if (status === "Lead") {
    return "info";
  }

  return "secondary";
}

export default function CustomersPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2 rounded-md border border-border bg-card p-5 pb-3 shadow-sm sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-medium text-primary">Customer records</p>
          <h2 className="text-2xl font-semibold">Customers</h2>
          <p className="max-w-md text-sm mt-0.5 text-muted-foreground">
            View the people and companies currently tracked in the CRM.
          </p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Customer List</CardTitle>
          <CardDescription>
            {customers.length} Customers are currently tracked.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 sm:hidden">
            {customers.map((customer) => (
              <div
                key={customer.id}
                className="rounded-md border border-border bg-muted/30 p-4"
              >
                <div className="mb-3 flex items-start justify-between gap-3">
                  <div>
                    <p className="font-medium">{customer.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {customer.jobTitle}
                    </p>
                  </div>
                  <Badge variant={getStatusVariant(customer.status)}>
                    {customer.status}
                  </Badge>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between gap-4">
                    <span className="text-muted-foreground">Company</span>
                    <span className="text-right">{customer.company}</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-muted-foreground">Email</span>
                    <span className="text-right">{customer.email}</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-muted-foreground">Phone</span>
                    <span className="text-right">{customer.phone}</span>
                  </div>
                </div>

                <Link
                  href={`/customers/${customer.id}`}
                  className="mt-4 inline-flex h-8 w-full items-center justify-center rounded-md border border-border bg-background px-3 text-sm font-medium transition-colors hover:bg-muted"
                >
                  View Details
                </Link>
              </div>
            ))}
          </div>

          <div className="hidden sm:block">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="min-w-44">Name</TableHead>
                  <TableHead className="min-w-36">Company</TableHead>
                  <TableHead className="min-w-52">Email</TableHead>
                  <TableHead className="min-w-40">Phone</TableHead>
                  <TableHead className="min-w-28">Status</TableHead>
                  <TableHead className=""></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {customers.map((customer) => (
                  <TableRow key={customer.id}>
                    <TableCell className="min-w-44">
                      <div>
                        <p className="whitespace-nowrap font-medium">
                          {customer.name}
                        </p>
                        <p className="whitespace-nowrap text-xs text-muted-foreground">
                          {customer.jobTitle}
                        </p>
                      </div>
                    </TableCell>
                    <TableCell className="min-w-36 whitespace-nowrap">
                      {customer.company}
                    </TableCell>
                    <TableCell className="min-w-52 whitespace-nowrap text-muted-foreground">
                      {customer.email}
                    </TableCell>
                    <TableCell className="min-w-40 whitespace-nowrap text-muted-foreground">
                      {customer.phone}
                    </TableCell>
                    <TableCell className="min-w-28">
                      <Badge variant={getStatusVariant(customer.status)}>
                        {customer.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="min-w-32">
                      <Link
                        href={`/customers/${customer.id}`}
                        className="inline-flex items-center h-8 whitespace-nowrap rounded-md border border-border bg-background px-3 text-sm font-medium transition-colors hover:bg-muted"
                      >
                        View Details
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

"use client";

import Link from "next/link";
import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { Customer, CustomerStatus } from "@/types/customer";

type CustomerListProps = {
  customers: Customer[];
};

type StatusFilter = "All" | CustomerStatus;
type SortField = "name" | "company" | "status";
type SortDirection = "asc" | "desc";

const statusOptions: StatusFilter[] = ["All", "Active", "Lead", "Inactive"];
const sortOptions: { label: string; value: SortField }[] = [
  { label: "Name", value: "name" },
  { label: "Company", value: "company" },
  { label: "Status", value: "status" },
];

function getStatusVariant(status: CustomerStatus) {
  if (status === "Active") {
    return "success";
  }

  if (status === "Lead") {
    return "info";
  }

  return "secondary";
}

function customerMatchesSearch(customer: Customer, searchTerm: string) {
  const searchValue = searchTerm.toLowerCase();

  return (
    customer.name.toLowerCase().includes(searchValue) ||
    customer.company.toLowerCase().includes(searchValue) ||
    customer.email.toLowerCase().includes(searchValue)
  );
}

function sortCustomers(
  customersToSort: Customer[],
  sortField: SortField,
  sortDirection: SortDirection,
) {
  return [...customersToSort].sort((firstCustomer, secondCustomer) => {
    const firstValue = firstCustomer[sortField].toLowerCase();
    const secondValue = secondCustomer[sortField].toLowerCase();

    if (firstValue < secondValue) {
      return sortDirection === "asc" ? -1 : 1;
    }

    if (firstValue > secondValue) {
      return sortDirection === "asc" ? 1 : -1;
    }

    return 0;
  });
}

function CustomerList({ customers }: CustomerListProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("All");
  const [sortField, setSortField] = useState<SortField>("name");
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc");

  const filteredCustomers = customers.filter((customer) => {
    const matchesSearch = customerMatchesSearch(customer, searchTerm);
    const matchesStatus =
      statusFilter === "All" || customer.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const sortedCustomers = sortCustomers(
    filteredCustomers,
    sortField,
    sortDirection,
  );

  function clearFilters() {
    setSearchTerm("");
    setStatusFilter("All");
    setSortField("name");
    setSortDirection("asc");
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Customer List</CardTitle>
        <CardDescription>
          Showing {filteredCustomers.length} of {customers.length} customers.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-5 grid gap-3 lg:grid-cols-[1fr_160px_160px_160px_auto]">
          <Input
            type="search"
            placeholder="Search by name, company, or email"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />

          <select
            value={statusFilter}
            onChange={(event) =>
              setStatusFilter(event.target.value as StatusFilter)
            }
            className="h-9 rounded-md border border-input bg-background px-3 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/40"
          >
            {statusOptions.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>

          <select
            value={sortField}
            onChange={(event) => setSortField(event.target.value as SortField)}
            className="h-9 rounded-md border border-input bg-background px-3 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/40"
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                Sort: {option.label}
              </option>
            ))}
          </select>

          <select
            value={sortDirection}
            onChange={(event) =>
              setSortDirection(event.target.value as SortDirection)
            }
            className="h-9 rounded-md border border-input bg-background px-3 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/40"
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>

          <Button variant="outline" onClick={clearFilters}>
            Clear
          </Button>
        </div>

        {filteredCustomers.length === 0 ? (
          <div className="rounded-md border border-dashed border-border p-8 text-center">
            <p className="font-medium">No customers found</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Try a different search term or status filter.
            </p>
          </div>
        ) : (
          <>
            <div className="space-y-3 sm:hidden">
              {sortedCustomers.map((customer) => (
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
                  {sortedCustomers.map((customer) => (
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
                          className="inline-flex h-8 items-center whitespace-nowrap rounded-md border border-border bg-background px-3 text-sm font-medium transition-colors hover:bg-muted"
                        >
                          View Details
                        </Link>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
}

export { CustomerList };

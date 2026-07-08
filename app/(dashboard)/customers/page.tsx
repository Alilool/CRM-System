import { CustomerList } from "@/components/customers/customer-list";
import { customers } from "@/data/customers";

export default function CustomersPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2 rounded-md border border-border bg-card p-5 pb-3 shadow-sm sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-medium text-primary">Customer records</p>
          <h2 className="text-2xl font-semibold">Customers</h2>
          <p className="mt-0.5 max-w-md text-sm text-muted-foreground">
            View the people and companies currently tracked in the CRM.
          </p>
        </div>
      </div>

      <CustomerList customers={customers} />
    </div>
  );
}

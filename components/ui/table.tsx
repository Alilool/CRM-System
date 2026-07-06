import {
  type HTMLAttributes,
  type TableHTMLAttributes,
  type TdHTMLAttributes,
  type ThHTMLAttributes,
} from "react";

type TableProps = TableHTMLAttributes<HTMLTableElement>;
type TableSectionProps = HTMLAttributes<HTMLTableSectionElement>;
type TableRowProps = HTMLAttributes<HTMLTableRowElement>;
type TableHeadProps = ThHTMLAttributes<HTMLTableCellElement>;
type TableCellProps = TdHTMLAttributes<HTMLTableCellElement>;

function Table({ className = "", ...props }: TableProps) {
  return (
    <div className="w-full overflow-x-auto">
      <table
        className={`w-full caption-bottom text-left text-sm ${className}`}
        {...props}
      />
    </div>
  );
}

function TableHeader({ className = "", ...props }: TableSectionProps) {
  return <thead className={`bg-muted/60 ${className}`} {...props} />;
}

function TableBody({ className = "", ...props }: TableSectionProps) {
  return <tbody className={className} {...props} />;
}

function TableRow({ className = "", ...props }: TableRowProps) {
  return (
    <tr
      className={`border-b border-border transition-colors hover:bg-muted/50 ${className}`}
      {...props}
    />
  );
}

function TableHead({ className = "", ...props }: TableHeadProps) {
  return (
    <th
      className={`h-11 px-4 text-xs font-semibold uppercase text-muted-foreground ${className}`}
      {...props}
    />
  );
}

function TableCell({ className = "", ...props }: TableCellProps) {
  return <td className={`px-4 py-3 align-middle ${className}`} {...props} />;
}

export { Table, TableHeader, TableBody, TableRow, TableHead, TableCell };

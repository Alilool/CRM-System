type EmptyStateProps = {
  title: string;
  description: string;
  action?: React.ReactNode;
};

function EmptyState({ title, description, action }: EmptyStateProps) {
  return (
    <div className="rounded-md border border-dashed border-border p-8 text-center">
      <p className="font-medium">{title}</p>
      <p className="mt-1 text-sm text-muted-foreground">{description}</p>
      {action && <div className="mt-5">{action}</div>}
    </div>
  );
}

export { EmptyState };

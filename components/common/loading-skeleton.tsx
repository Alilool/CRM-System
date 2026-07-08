type LoadingSkeletonProps = {
  className?: string;
};

function LoadingSkeleton({ className = "" }: LoadingSkeletonProps) {
  return (
    <div
      className={`animate-pulse rounded-md bg-muted ${className}`}
      aria-hidden="true"
    />
  );
}

export { LoadingSkeleton };

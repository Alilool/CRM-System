import { type InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const inputClasses =
  "h-9 w-full rounded-md border border-input bg-background px-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/40 disabled:cursor-not-allowed disabled:opacity-50";

function Input({ className = "", ...props }: InputProps) {
  return <input className={`${inputClasses} ${className}`} {...props} />;
}

export { Input };

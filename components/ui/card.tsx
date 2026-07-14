import { type HTMLAttributes } from "react"

type DivProps = HTMLAttributes<HTMLDivElement>

function Card({ className = "", ...props }: DivProps) {
  return (
    <div
      className={`rounded-md border border-border bg-card text-card-foreground shadow-sm shadow-slate-200/70 transition-shadow dark:shadow-none ${className}`}
      {...props}
    />
  )
}

function CardHeader({ className = "", ...props }: DivProps) {
  return <div className={`p-5 pb-3 ${className}`} {...props} />
}

function CardTitle({ className = "", ...props }: DivProps) {
  return <div className={`font-semibold ${className}`} {...props} />
}

function CardDescription({ className = "", ...props }: DivProps) {
  return (
    <div className={`text-sm text-muted-foreground ${className}`} {...props} />
  )
}

function CardContent({ className = "", ...props }: DivProps) {
  return <div className={`p-5 pt-0 ${className}`} {...props} />
}

function CardFooter({ className = "", ...props }: DivProps) {
  return <div className={`p-5 pt-0 ${className}`} {...props} />
}

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
}

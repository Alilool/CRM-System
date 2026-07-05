import { ThemeToggle } from "@/components/layout/theme-toggle";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LoginForm } from "@/components/auth/login-form";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="flex min-h-screen">
        <section className="hidden flex-1 bg-sidebar p-8 text-sidebar-foreground lg:flex lg:flex-col lg:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-sidebar-primary font-semibold text-sidebar-primary-foreground">
              C
            </div>
            <div>
              <p className="font-semibold">CoreCRM</p>
              <p className="text-sm text-sidebar-foreground/60">
                Sales dashboard
              </p>
            </div>
          </div>

          <div className="max-w-lg">
            <p className="mb-4 text-sm font-medium text-sidebar-primary">
              Customer relationship management
            </p>
            <h1 className="text-4xl font-semibold leading-tight">
              Manage your customers, deals, and daily work in one place.
            </h1>
          </div>
        </section>

        <section className="flex flex-1 items-center justify-center p-4 sm:p-8">
          <div className="w-full max-w-md">
            <div className="mb-6 flex justify-end">
              <ThemeToggle />
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Log in</CardTitle>
                <CardDescription>
                  Enter your account details to open the dashboard.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <LoginForm />
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </main>
  );
}

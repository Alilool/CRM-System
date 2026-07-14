"use client";

import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { LoadingSkeleton } from "@/components/common/loading-skeleton";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useLocalStorage } from "@/hooks/use-local-storage";

type ThemeOption = "light" | "dark" | "system";

const themeOptions: { label: string; value: ThemeOption }[] = [
  { label: "Light", value: "light" },
  { label: "Dark", value: "dark" },
  { label: "System", value: "system" },
];

function SettingsControls() {
  const router = useRouter();
  const { setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [emailNotifications, setEmailNotifications] = useLocalStorage(
    "emailNotifications",
    true,
  );
  const [dealNotifications, setDealNotifications] = useLocalStorage(
    "dealNotifications",
    true,
  );
  const [taskNotifications, setTaskNotifications] = useLocalStorage(
    "taskNotifications",
    false,
  );

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  function handleLogout() {
    localStorage.removeItem("currentUser");
    router.replace("/login");
  }

  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Notification Settings</CardTitle>
          <CardDescription>
            Choose which mock CRM updates should be highlighted.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {mounted ? (
            <>
              <label className="flex items-start gap-3 rounded-md border border-border bg-muted/30 p-4">
                <input
                  type="checkbox"
                  checked={emailNotifications}
                  onChange={(event) =>
                    setEmailNotifications(event.target.checked)
                  }
                  className="mt-1 h-4 w-4"
                />
                <span className="min-w-0">
                  <span className="block text-sm font-medium">
                    Email notifications
                  </span>
                  <span className="text-sm text-muted-foreground">
                    Receive updates about important customer activity.
                  </span>
                </span>
              </label>

              <label className="flex items-start gap-3 rounded-md border border-border bg-muted/30 p-4">
                <input
                  type="checkbox"
                  checked={dealNotifications}
                  onChange={(event) =>
                    setDealNotifications(event.target.checked)
                  }
                  className="mt-1 h-4 w-4"
                />
                <span className="min-w-0">
                  <span className="block text-sm font-medium">
                    Deal updates
                  </span>
                  <span className="text-sm text-muted-foreground">
                    Show alerts when deals change stage or close.
                  </span>
                </span>
              </label>

              <label className="flex items-start gap-3 rounded-md border border-border bg-muted/30 p-4">
                <input
                  type="checkbox"
                  checked={taskNotifications}
                  onChange={(event) =>
                    setTaskNotifications(event.target.checked)
                  }
                  className="mt-1 h-4 w-4"
                />
                <span className="min-w-0">
                  <span className="block text-sm font-medium">
                    Task reminders
                  </span>
                  <span className="text-sm text-muted-foreground">
                    Highlight tasks that are close to their due date.
                  </span>
                </span>
              </label>
            </>
          ) : (
            <>
              <div className="rounded-md border border-border bg-muted/30 p-4">
                <LoadingSkeleton className="h-5 w-40" />
                <LoadingSkeleton className="mt-2 h-4 w-64 max-w-full" />
              </div>
              <div className="rounded-md border border-border bg-muted/30 p-4">
                <LoadingSkeleton className="h-5 w-28" />
                <LoadingSkeleton className="mt-2 h-4 w-60 max-w-full" />
              </div>
              <div className="rounded-md border border-border bg-muted/30 p-4">
                <LoadingSkeleton className="h-5 w-32" />
                <LoadingSkeleton className="mt-2 h-4 w-56 max-w-full" />
              </div>
            </>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Theme Settings</CardTitle>
          <CardDescription>
            Choose how the CRM dashboard should look on this device.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 sm:grid-cols-3">
            {themeOptions.map((option) => (
              <Button
                key={option.value}
                variant="outline"
                onClick={() => setTheme(option.value)}
              >
                {option.label}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Account</CardTitle>
          <CardDescription>
            Sign out from this mock CRM account on this device.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button variant="danger" onClick={handleLogout}>
            Logout
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export { SettingsControls };

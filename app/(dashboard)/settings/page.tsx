"use client";

import { useEffect, useState } from "react";

import { LoadingSkeleton } from "@/components/common/loading-skeleton";
import { SettingsControls } from "@/components/settings/settings-controls";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { users } from "@/data/users";
import { useLocalStorage } from "@/hooks/use-local-storage";

export default function SettingsPage() {
  const [currentUser] = useLocalStorage("currentUser", users[0]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2 rounded-md border border-border bg-card p-5 shadow-sm sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-medium text-primary">Workspace setup</p>
          <h2 className="text-2xl font-semibold">Settings</h2>
        </div>
        <p className="max-w-md text-sm text-muted-foreground">
          Manage the profile, notifications, and theme preferences for the mock
          CRM account.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>User Information</CardTitle>
          <CardDescription>
            This profile comes from the local mock users file.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-3">
          <div className="rounded-md border border-border bg-muted/30 p-4">
            <p className="text-sm text-muted-foreground">Name</p>
            {mounted ? (
              <p className="mt-1 font-medium">{currentUser.name}</p>
            ) : (
              <LoadingSkeleton className="mt-2 h-5 w-32" />
            )}
          </div>

          <div className="rounded-md border border-border bg-muted/30 p-4">
            <p className="text-sm text-muted-foreground">Email</p>
            {mounted ? (
              <p className="mt-1 break-words font-medium">
                {currentUser.email}
              </p>
            ) : (
              <LoadingSkeleton className="mt-2 h-5 w-44 max-w-full" />
            )}
          </div>

          <div className="rounded-md border border-border bg-muted/30 p-4">
            <p className="text-sm text-muted-foreground">Role</p>
            {mounted ? (
              <p className="mt-1 font-medium">{currentUser.role}</p>
            ) : (
              <LoadingSkeleton className="mt-2 h-5 w-24" />
            )}
          </div>
        </CardContent>
      </Card>

      <SettingsControls />
    </div>
  );
}

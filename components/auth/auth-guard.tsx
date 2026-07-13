"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { LoadingSkeleton } from "@/components/common/loading-skeleton";
import { users } from "@/data/users";
import type { User } from "@/types/user";

function isAllowedUser(userToCheck: User) {
  return users.some(
    (user) =>
      user.id === userToCheck.id &&
      user.email.toLowerCase() === userToCheck.email.toLowerCase() &&
      user.role === userToCheck.role &&
      user.password === userToCheck.password &&
      user.name === userToCheck.name,
  );
}

function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [isAllowed, setIsAllowed] = useState(false);

  useEffect(() => {
    const savedUser = localStorage.getItem("currentUser");

    if (!savedUser) {
      router.replace("/login");
      return;
    }

    try {
      const currentUser = JSON.parse(savedUser) as User;

      if (!isAllowedUser(currentUser)) {
        localStorage.removeItem("currentUser");
        router.replace("/login");
        return;
      }

      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsAllowed(true);
    } catch {
      localStorage.removeItem("currentUser");
      router.replace("/login");
    }
  }, [router]);

  if (!isAllowed) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background p-6">
        <div className="w-full max-w-sm rounded-md border border-border bg-card p-5 shadow-sm">
          <LoadingSkeleton className="h-5 w-32" />
          <LoadingSkeleton className="mt-4 h-4 w-full" />
          <LoadingSkeleton className="mt-2 h-4 w-5/6" />
        </div>
      </div>
    );
  }

  return children;
}

export { AuthGuard };

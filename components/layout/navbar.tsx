"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { navItems } from "@/components/layout/sidebar";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { LoadingSkeleton } from "@/components/common/loading-skeleton";
import { NotificationsPanel } from "@/components/layout/notifications-panel";
import { useLocalStorage } from "@/hooks/use-local-storage";

function Navbar() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [currentUser] = useLocalStorage("currentUser", {
    name: "CRM Dashboard",
  });

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  return (
    <>
      <header className="flex h-16 items-center justify-between border-b border-border bg-card/80 px-4 backdrop-blur md:px-6">
        <div className="min-w-0">
          <p className="text-sm text-muted-foreground">Welcome back</p>
          {mounted ? (
            <h1 className="truncate text-lg font-semibold">
              {currentUser?.name ?? "CRM Dashboard"}
            </h1>
          ) : (
            <LoadingSkeleton className="h-5 w-32" />
          )}
        </div>

        <div className="flex items-center gap-2">
          <NotificationsPanel />
          <ThemeToggle />
        </div>
      </header>

      <nav className="flex gap-2 overflow-x-auto border-b border-border bg-card/80 px-4 py-2 md:hidden">
        {navItems.map((item) => {
          const isActive =
            pathname === item.href || pathname.startsWith(`${item.href}/`);

          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              className={`flex shrink-0 items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors ${
                isActive
                  ? "bg-primary text-accent-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              {item.icon}
              {item.label}
            </Link>
          );
        })}
      </nav>
    </>
  );
}

export { Navbar };

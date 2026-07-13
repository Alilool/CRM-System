"use client";
import Link from "next/link";
import { FaBell, FaMagnifyingGlass } from "react-icons/fa6";
import { useEffect, useState } from "react";

import { navItems } from "@/components/layout/sidebar";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { Button } from "@/components/ui/button";
import { LoadingSkeleton } from "@/components/common/loading-skeleton";
import { useLocalStorage } from "@/hooks/use-local-storage";

function Navbar() {
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
        <div>
          <p className="text-sm text-muted-foreground">Welcome back</p>
          {mounted ? (
            <h1 className="text-lg font-semibold">
              {currentUser?.name ?? "CRM Dashboard"}
            </h1>
          ) : (
            <LoadingSkeleton className="h-5 w-32" />
          )}
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" aria-label="Search">
            <FaMagnifyingGlass />
          </Button>
          <Button variant="ghost" size="icon" aria-label="Notifications">
            <FaBell />
          </Button>
          <ThemeToggle />
          <Link
            href="/settings"
            className="hidden rounded-md border border-border px-3 py-2 text-sm font-medium hover:bg-muted sm:block"
          >
            Profile
          </Link>
        </div>
      </header>

      <nav className="flex gap-2 overflow-x-auto border-b border-border bg-card/80 px-4 py-2 md:hidden">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex shrink-0 items-center gap-2 rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
          >
            {item.icon}
            {item.label}
          </Link>
        ))}
      </nav>
    </>
  );
}

export { Navbar };

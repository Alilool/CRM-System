import Link from "next/link";
import { FaBell, FaMagnifyingGlass } from "react-icons/fa6";

import { navItems } from "@/components/layout/sidebar";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { Button } from "@/components/ui/button";

function Navbar() {
  return (
    <>
      <header className="flex h-16 items-center justify-between border-b border-border bg-card/80 px-4 backdrop-blur md:px-6">
        <div>
          <p className="text-sm text-muted-foreground">Welcome back</p>
          <h1 className="text-lg font-semibold">CRM Dashboard</h1>
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

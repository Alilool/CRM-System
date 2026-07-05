import Link from "next/link";
import {
  FaChartLine,
  FaHandshake,
  FaHouse,
  FaListCheck,
  FaUsers,
} from "react-icons/fa6";
import { IoSettingsSharp } from "react-icons/io5";

type NavItem = {
  label: string;
  href: string;
  icon: React.ReactNode;
};

const navItems: NavItem[] = [
  { label: "Dashboard", href: "/dashboard", icon: <FaHouse /> },
  { label: "Customers", href: "/customers", icon: <FaUsers /> },
  { label: "Deals", href: "/deals", icon: <FaHandshake /> },
  { label: "Tasks", href: "/tasks", icon: <FaListCheck /> },
  { label: "Reports", href: "/reports", icon: <FaChartLine /> },
  { label: "Settings", href: "/settings", icon: <IoSettingsSharp /> },
];

function Sidebar() {
  return (
    <aside className="hidden w-64 border-r border-sidebar-border bg-sidebar px-4 py-5 text-sidebar-foreground md:block">
      <Link href="/dashboard" className="mb-8 flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-md bg-sidebar-primary text-sm font-semibold text-[#fafcfe] shadow-sm">
          C
        </div>
        <div>
          <p className="font-semibold">CoreCRM</p>
          <p className="text-xs text-sidebar-foreground/60">Sales dashboard</p>
        </div>
      </Link>

      <nav className="space-y-1">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-sidebar-foreground/70 transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
          >
            <span className="text-base text-sidebar-foreground/70">
              {item.icon}
            </span>
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}

export { Sidebar, navItems };

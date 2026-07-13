"use client";

import { useState, type ReactNode } from "react";
import { FaChevronDown } from "react-icons/fa6";

import { Button } from "@/components/ui/button";

type DropdownItem = {
  label: string;
  onClick: () => void;
};

type DropdownProps = {
  label: string;
  items: DropdownItem[];
  icon?: ReactNode;
};

function Dropdown({ label, items, icon }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleDropdown() {
    setIsOpen((open) => !open);
  }

  function closeDropdown() {
    setIsOpen(false);
  }

  return (
    <div className="relative inline-block text-left">
      <Button variant="outline" onClick={toggleDropdown}>
        {icon && <span className="mr-2">{icon}</span>}
        {label}
        <FaChevronDown className="ml-2 text-xs" />
      </Button>

      {isOpen && (
        <>
          <button
            type="button"
            className="fixed inset-0 z-40 cursor-default"
            aria-label="Close dropdown"
            onClick={closeDropdown}
          />

          <div className="absolute right-0 z-50 mt-2 w-48 rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-lg">
            {items.map((item) => (
              <button
                key={item.label}
                type="button"
                className="block w-full rounded-md px-3 py-2 text-left text-sm transition-colors hover:bg-muted"
                onClick={() => {
                  item.onClick();
                  closeDropdown();
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export { Dropdown };
export type { DropdownItem };

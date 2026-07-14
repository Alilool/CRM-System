"use client";

import { useEffect, useRef, useState } from "react";
import { FaBell } from "react-icons/fa6";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { notifications } from "@/data/notifications";
import type { NotificationType } from "@/types/notification";

function getNotificationVariant(type: NotificationType) {
  if (type === "task") {
    return "warning";
  }

  if (type === "deal") {
    return "info";
  }

  return "secondary";
}

function NotificationsPanel() {
  const panelWrapperRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const unreadCount = notifications.filter(
    (notification) => notification.isUnread,
  ).length;

  useEffect(() => {
    function closeWhenClickingOutside(event: MouseEvent) {
      if (
        panelWrapperRef.current &&
        !panelWrapperRef.current.contains(event.target as Node)
      ) {
        closePanel();
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", closeWhenClickingOutside);
    }

    return () => {
      document.removeEventListener("mousedown", closeWhenClickingOutside);
    };
  }, [isOpen]);

  function closePanel() {
    setIsOpen(false);
  }

  return (
    <div ref={panelWrapperRef} className="relative">
      <Button
        variant="ghost"
        size="icon"
        aria-label="Open notifications"
        onClick={() => setIsOpen((open) => !open)}
      >
        <FaBell />
        {unreadCount > 0 && (
          <span className="absolute right-1 top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-destructive text-[10px] font-semibold text-white">
            {unreadCount}
          </span>
        )}
      </Button>

      {isOpen && (
        <>
          <button
            type="button"
            aria-label="Close notifications"
            className="fixed inset-0 z-40 cursor-default"
            onClick={closePanel}
          />

          <div className="fixed left-4 right-4 top-20 z-50 rounded-md border border-border bg-popover text-popover-foreground shadow-lg sm:absolute sm:left-auto sm:right-0 sm:top-auto sm:mt-2 sm:w-88">
            <div className="border-b border-border p-4">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="font-semibold">Notifications</p>
                  <p className="text-sm text-muted-foreground">
                    {unreadCount} unread updates
                  </p>
                </div>
                <Badge variant="secondary">{notifications.length}</Badge>
              </div>
            </div>

            <div className="max-h-[min(28rem,calc(100vh-8rem))] overflow-y-auto p-2">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className="rounded-md p-3 transition-colors hover:bg-muted"
                >
                  <div className="mb-2 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-3">
                    <p className="font-medium wrap-break-word">
                      {notification.title}
                    </p>
                    <Badge variant={getNotificationVariant(notification.type)}>
                      {notification.type}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {notification.description}
                  </p>
                  <p className="mt-2 text-xs text-muted-foreground">
                    {notification.time}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export { NotificationsPanel };

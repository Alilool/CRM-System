"use client";

import { type ReactNode } from "react";
import { FaXmark } from "react-icons/fa6";

import { Button } from "@/components/ui/button";

type ModalProps = {
  isOpen: boolean;
  title: string;
  description?: string;
  children: ReactNode;
  onClose: () => void;
};

function Modal({ isOpen, title, description, children, onClose }: ModalProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <button
        type="button"
        className="absolute inset-0 cursor-default"
        aria-label="Close modal"
        onClick={onClose}
      />

      <div className="relative w-full max-w-lg rounded-md border border-border bg-card text-card-foreground shadow-lg">
        <div className="flex items-start justify-between gap-4 border-b border-border p-5">
          <div>
            <h2 id="modal-title" className="font-semibold">
              {title}
            </h2>
            {description && (
              <p className="mt-1 text-sm text-muted-foreground">
                {description}
              </p>
            )}
          </div>

          <Button
            variant="ghost"
            size="icon"
            aria-label="Close modal"
            onClick={onClose}
          >
            <FaXmark />
          </Button>
        </div>

        <div className="p-5">{children}</div>
      </div>
    </div>
  );
}

export { Modal };

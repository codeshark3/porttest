"use client";

import * as React from "react";
import { cn } from "~/lib/utils";
import { X } from "lucide-react";
type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50",
      )}
      onClick={onClose}
    >
      {/* Modal Content */}
      <div
        className="relative w-full max-w-4xl overflow-hidden rounded-lg bg-white shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          className="absolute right-2 top-2 rounded-full bg-gray-200 text-black hover:bg-gray-300"
          onClick={onClose}
        >
          <X size={24} />
        </button>
        <div>{children}</div>
      </div>
    </div>
  );
};

"use client";

import React from "react";
import * as Dialog from "@radix-ui/react-dialog";

interface ModalProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ title, subtitle, children }) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="bg-red-600 text-white py-2 px-4 rounded-lg">
          Open Modal
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 z-40" />
        <Dialog.Content className="fixed top-1/2 left-1/2 w-[90%] max-w-md -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg z-50">
          <header className="mb-4">
            <h1 className="text-lg font-semibold text-gray-800">{title}</h1>
            {subtitle && (
              <p className="text-sm text-gray-600 mt-1">{subtitle}</p>
            )}
          </header>
          <div>{children}</div>
          <Dialog.Close asChild>
            <button className="mt-6 bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300">
              Close
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;

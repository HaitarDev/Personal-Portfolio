"use client";

import { ReactNode, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const ModalContent = ({
  setIsOpen,
  children,
}: {
  setIsOpen: (boolean: boolean) => void;
  children: ReactNode | string;
}) => (
  <motion.div
    initial={{ scale: 0, rotate: "12.5deg", opacity: 0 }}
    animate={{ scale: 1, rotate: "0deg", opacity: 1 }}
    exit={{ scale: 0, rotate: "0deg", opacity: 0 }}
    onClick={(e) => e.stopPropagation()}
    className="bg-gradient-to-br from-violet-600 to-indigo-600 py-6 px-14  rounded-lg w-full h-full max-h-[50vh] lg:max-w-[50vw]  cursor-default relative overflow-hidden"
  >
    {children}
  </motion.div>
);

const SpringModal = ({
  isOpen,
  setIsOpen,
  children,
}: {
  isOpen: boolean;
  setIsOpen: (boolean: boolean) => void;
  children: ReactNode | string;
}) => {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleEscape);
    } else {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleEscape);
    }

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, setIsOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(false);
          }}
          className="bg-slate-900/10 backdrop-blur-[2px] p-8 fixed inset-0 z-50 grid place-items-center overflow-hidden"
        >
          <ModalContent setIsOpen={setIsOpen}>{children}</ModalContent>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SpringModal;

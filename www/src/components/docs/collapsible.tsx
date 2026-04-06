import { useState } from "react";
import clsx from "clsx";

interface CollapsibleProps {
  title: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}

export default function Collapsible({
  title,
  defaultOpen = false,
  children,
}: CollapsibleProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="my-4 w-full rounded-lg border border-t3-purple-200/20 bg-t3-purple-200/5 dark:bg-t3-purple-200/10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between px-4 py-3 text-left font-medium transition-colors hover:bg-t3-purple-200/10 dark:hover:bg-t3-purple-200/20"
        aria-expanded={isOpen}
      >
        <span className="text-foreground">{title}</span>
        <svg
          className={clsx(
            "h-5 w-5 transition-transform duration-200 text-muted-foreground",
            isOpen && "rotate-180",
          )}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
      <div
        className={clsx(
          "overflow-hidden transition-all duration-200",
          isOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="border-t border-t3-purple-200/20 px-4 py-3 text-muted-foreground">
          {children}
        </div>
      </div>
    </div>
  );
}

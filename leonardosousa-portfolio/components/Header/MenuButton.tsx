"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

interface MenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
  label: string;
}

export default function MenuButton({
  isOpen,
  onClick,
  label,
}: MenuButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      aria-expanded={isOpen}
      aria-controls="mobile-navigation"
      className={[
        "flex h-10 w-10 items-center justify-center",
        "rounded-md border border-white/10",
        "text-[#9cbcd9]",
        "transition-all duration-200",
        "hover:border-[#1b65a6]",
        "hover:bg-[#1b65a6]/10",
        "hover:text-white",
        "focus-visible:outline-2",
        "focus-visible:outline-offset-2",
        "focus-visible:outline-[#9cbcd9]",
      ].join(" ")}
    >
      <FontAwesomeIcon
        icon={isOpen ? faXmark : faBars}
        className="h-5 w-5"
        aria-hidden="true"
      />
    </button>
  );
}

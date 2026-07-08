"use client";

import { Briefcase, Code, Folder as FolderIcon, User } from "lucide-react";

const ICONS = {
  user: User,
  code: Code,
  folder: FolderIcon,
  briefcase: Briefcase,
};

export default function FolderCardItem({ icon = "folder", label, onClick }) {
  const Icon = ICONS[icon] || User;

  const handleClick = (e) => {
    e.stopPropagation();
    onClick?.(e);
  };

  const handleKeyDown = (e) => {
    e.stopPropagation();
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onClick?.(e);
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      className="folder-card-item flex h-full w-full cursor-pointer flex-col items-center justify-center gap-1 text-[#0a0a0a] transition-transform hover:scale-110"
      aria-label={label}
    >
      <Icon size={16} strokeWidth={2.5} aria-hidden="true" />
      <span className="text-[9px] font-bold uppercase tracking-tight">
        {label}
      </span>
    </button>
  );
}
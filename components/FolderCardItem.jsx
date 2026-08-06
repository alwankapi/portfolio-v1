"use client";

import { Briefcase, Code, Folder as FolderIcon, User } from "lucide-react";
import "./FolderCardItem.css";

const ICONS = {
  user: User,
  code: Code,
  folder: FolderIcon,
  briefcase: Briefcase,
};

export default function FolderCardItem({
  icon = "folder",
  label,
  accent = "#d01b1b",
  onClick,
}) {
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
      className="folder-card-item fc-card"
      style={{ "--fc-accent": accent }}
      aria-label={label}
    >
      <span className="fc-card__corner fc-card__corner--tl" aria-hidden="true" />
      <span className="fc-card__corner fc-card__corner--br" aria-hidden="true" />

      <span className="fc-card__icon">
        <Icon size={15} strokeWidth={2.6} aria-hidden="true" />
      </span>

      <span className="fc-card__label">{label}</span>
      <span className="fc-card__rule" aria-hidden="true" />
    </button>
  );
}

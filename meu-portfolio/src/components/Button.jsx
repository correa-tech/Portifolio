import React from "react";
import clsx from "clsx";

/**
 * Componente de botão reutilizável
 * Props:
 * - variant: "primary" | "secondary" | "outline" | "ghost" | "gradient"
 * - size: "sm" | "md" | "lg"
 * - onClick: função
 * - children: conteúdo do botão
 */
export default function Button({
  children,
  variant = "primary",
  size = "md",
  onClick,
  className,
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-md font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer";

  const variants = {
    primary:
      "bg-violet-800 text-white hover:bg-violet-950 focus:ring-violet-500",
    secondary:
      "bg-gray-700 text-white hover:bg-gray-800 focus:ring-gray-500",
    outline:
      "border border-white/30 text-white hover:bg-white/10 focus:ring-white/30",
    ghost:
      "bg-transparent text-white hover:bg-white/10 focus:ring-white/20",
    gradient:
      "bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white hover:opacity-90 focus:ring-pink-400",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2.5 text-base",
    lg: "px-7 py-3 text-lg",
  };

  return (
    <button
      onClick={onClick}
      className={clsx(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}

"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  href?: string;
}

export default function Button({
  variant = "primary",
  size = "md",
  children,
  href,
  className = "",
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantClasses = {
    primary:
      "bg-transparent border-[5px] border-[#DA0B65] text-[#FF0364] hover:bg-[#FF0364] hover:text-white focus:ring-[#FF0364] rounded-[5px]",
    secondary:
      "bg-[#0E0E43] text-white hover:bg-[#1A1A4A] focus:ring-[#0E0E43] shadow-lg hover:shadow-xl rounded-full",
    outline:
      "border-2 border-[#FF0364] text-[#FF0364] hover:bg-[#FF0364] hover:text-white focus:ring-[#FF0364] rounded-[5px]",
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-6 py-3 text-lg font-medium",
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "default" | "ghost";
}

export default function Button({ children, className = "", variant = "default", ...props }: ButtonProps) {
  const baseClasses = "transition-colors duration-200";
  const variantClasses = {
    default: "",
    ghost: "",
  };

  return (
    <button className={`${baseClasses} ${variantClasses[variant]} ${className}`.trim()} {...props}>
      {children}
    </button>
  );
}

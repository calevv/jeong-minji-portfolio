import type { ReactNode } from "react";
import { Link } from "react-router";
import styles from "./Button.module.css";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps {
  variant?: ButtonVariant;
  to?: string;
  href?: string;
  disabled?: boolean;
  onClick?: () => void;
  children: ReactNode;
}

export default function Button({
  variant = "primary",
  to,
  href,
  disabled = false,
  onClick,
  children,
}: ButtonProps) {
  const className = `${styles.button} ${styles[variant]}`;

  if (disabled) {
    return (
      <button type="button" className={className} disabled>
        {children}
      </button>
    );
  }

  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={className} onClick={onClick}>
      {children}
    </button>
  );
}

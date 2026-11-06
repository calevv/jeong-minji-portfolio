import type { ReactNode } from "react";
import styles from "./Badge.module.css";

type BadgeTone = "neutral" | "success" | "warning";

interface BadgeProps {
  tone?: BadgeTone;
  children: ReactNode;
}

export default function Badge({ tone = "neutral", children }: BadgeProps) {
  return <span className={`${styles.badge} ${styles[tone]}`}>{children}</span>;
}

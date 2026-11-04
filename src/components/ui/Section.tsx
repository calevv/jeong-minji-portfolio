import type { ReactNode } from "react";
import styles from "./Section.module.css";

interface SectionProps {
  id?: string;
  tone?: "default" | "tint";
  children: ReactNode;
}

export default function Section({
  id,
  tone = "default",
  children,
}: SectionProps) {
  const className =
    tone === "tint" ? `${styles.section} ${styles.tint}` : styles.section;

  return (
    <section id={id} className={className}>
      <div className={styles.inner}>{children}</div>
    </section>
  );
}

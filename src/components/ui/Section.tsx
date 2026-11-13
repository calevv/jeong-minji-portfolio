import type { ReactNode } from "react";
import useReveal from "@/hooks/useReveal";
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
  const { ref, visible } = useReveal<HTMLElement>();

  const sectionClass =
    tone === "tint" ? `${styles.section} ${styles.tint}` : styles.section;
  const innerClass = visible
    ? `${styles.inner} ${styles.reveal} ${styles.visible}`
    : `${styles.inner} ${styles.reveal}`;

  return (
    <section id={id} ref={ref} className={sectionClass}>
      <div className={innerClass}>{children}</div>
    </section>
  );
}

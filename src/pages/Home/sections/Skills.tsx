import Badge from "@/components/ui/Badge";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import { skills } from "@/data/skills";
import styles from "./Skills.module.css";

export default function Skills() {
  return (
    <Section id="stack">
      <div className={styles.skills}>
        <SectionHeader eyebrow="STACK" title="기술 스택" />
        <div className={styles.cards}>
          {skills.map((group) => (
            <article key={group.category} className={styles.card}>
              <h3 className={styles.cardTitle}>{group.title}</h3>
              <ul className={styles.list}>
                {group.items.map((item) => (
                  <li key={item}>
                    <Badge>{item}</Badge>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}

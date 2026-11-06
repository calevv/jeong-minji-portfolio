import Section from "@/components/ui/Section";
import { profile } from "@/data/profile";
import styles from "./About.module.css";

const infoGroups = [
  { title: "Certifications", items: profile.certifications },
  { title: "Education", items: profile.education },
  { title: "Training", items: profile.training },
];

export default function About() {
  const { career } = profile;

  return (
    <Section id="about" tone="tint">
      <div className={styles.about}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>ABOUT</p>
          <div className={styles.intro}>
            <div className={styles.avatar}>
              {profile.photo && (
                <img src={profile.photo} alt={`${profile.name} 프로필 사진`} />
              )}
            </div>
            <div className={styles.introText}>
              <h2 className={styles.title}>{profile.aboutTitle}</h2>
              <p className={styles.text}>{profile.intro}</p>
            </div>
          </div>
        </div>

        <article className={styles.career}>
          <div className={styles.careerHead}>
            <h3 className={styles.cardTitle}>Experience</h3>
            <p className={styles.company}>
              {career.company} · {career.role}
            </p>
            <p className={styles.meta}>{career.period}</p>
          </div>
          <div className={styles.works}>
            {career.works.map((work) => (
              <div key={work.title}>
                <p className={styles.workTitle}>
                  {work.title}
                  <span className={styles.meta}>{work.period}</span>
                </p>
                <ul className={styles.workList}>
                  {work.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </article>

        <div className={styles.cards}>
          {infoGroups.map((group) => (
            <article key={group.title} className={styles.card}>
              <h3 className={styles.cardTitle}>{group.title}</h3>
              <ul className={styles.itemList}>
                {group.items.map((item) => (
                  <li key={item.name} className={styles.item}>
                    <span className={styles.itemName}>{item.name}</span>
                    <span className={styles.meta}>{item.date}</span>
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

import Button from "@/components/ui/Button";
import { profile } from "@/data/profile";
import styles from "./Hero.module.css";

export default function Hero() {
  const delay = (order: number) => ({
    animationDelay: `calc(var(--motion-stagger) * ${order})`,
  });

  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <h1 className={styles.title}>
          {profile.heroTitle.map((line, index) => (
            <span
              key={line.text}
              className={`${styles.line} ${styles.animate} ${line.accent ? styles.accent : ""}`}
              style={delay(index)}
            >
              {line.text}
            </span>
          ))}
        </h1>
        <p
          className={`${styles.description} ${styles.animate}`}
          style={delay(3)}
        >
          {profile.heroDescription}
        </p>
        <div className={`${styles.actions} ${styles.animate}`} style={delay(4)}>
          <Button to="/#projects">프로젝트 보기</Button>
          <Button variant="secondary" href={profile.resumeUrl}>
            이력서 보기
          </Button>
        </div>
      </div>
    </section>
  );
}

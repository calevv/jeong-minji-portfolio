import Button from "@/components/ui/Button";
import { profile } from "@/data/profile";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <h1 className={styles.title}>
          {profile.heroTitle.map((line) => (
            <span key={line} className={styles.line}>
              {line}
            </span>
          ))}
        </h1>
        <p className={styles.description}>{profile.heroDescription}</p>
        <div className={styles.actions}>
          <Button to="/#projects">프로젝트 보기</Button>
          <Button variant="secondary" href={profile.resumeUrl}>
            이력서 보기
          </Button>
        </div>
      </div>
    </section>
  );
}

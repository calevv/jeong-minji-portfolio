import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import styles from "./NotFound.module.css";

export default function NotFound() {
  return (
    <Section>
      <div className={styles.notFound}>
        <p className={styles.code}>404</p>
        <h1 className={styles.title}>페이지를 찾을 수 없습니다</h1>
        <p className={styles.text}>주소가 바뀌었거나 없는 페이지입니다.</p>
        <div className={styles.actions}>
          <Button to="/">홈으로</Button>
          <Button variant="secondary" to="/#projects">
            프로젝트 보기
          </Button>
        </div>
      </div>
    </Section>
  );
}

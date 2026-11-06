import Section from "@/components/ui/Section";
import { profile } from "@/data/profile";
import styles from "./Contact.module.css";

const snsLinks = [
  { name: "GitHub", url: profile.links.github },
  { name: "Velog", url: profile.links.velog },
];

export default function Contact() {
  return (
    <Section id="contact">
      <div className={styles.band}>
        <div className={styles.text}>
          <p className={styles.eyebrow}>CONTACT</p>
          <h2 className={styles.title}>연락을 기다리고 있습니다.</h2>
          <p>채용 문의나 협업 제안은 메일로 편하게 보내 주세요.</p>
          <a
            href={profile.resumeUrl}
            className={styles.resume}
            target="_blank"
            rel="noopener noreferrer"
          >
            이력서 보기
          </a>
        </div>

        <div className={styles.links}>
          <a href={`mailto:${profile.email}`} className={styles.email}>
            <span className={styles.emailLabel}>이메일</span>
            <span className={styles.emailAddress}>{profile.email}</span>
            <span className={styles.emailAction}>메일 보내기</span>
          </a>
          <ul className={styles.sns}>
            {snsLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.url}
                  className={styles.snsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className={styles.snsName}>{link.name}</span>
                  <span className={styles.snsUrl}>
                    {link.url.replace("https://", "")}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

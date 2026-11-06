import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import type { Project } from "@/types/project";
import { kindLabel, statusLabel, statusTone } from "./projectLabels";
import styles from "./ProjectItem.module.css";

interface ProjectItemProps {
  project: Project;
}

export default function ProjectItem({ project }: ProjectItemProps) {
  const { links } = project;

  return (
    <article className={styles.project}>
      <div className={styles.head}>
        <div className={styles.titleRow}>
          <h3 className={styles.title}>{project.title}</h3>
          <Badge tone={statusTone[project.status]}>
            {statusLabel[project.status]}
          </Badge>
          <Badge>{kindLabel[project.kind]}</Badge>
        </div>
        <p className={styles.summary}>{project.summary}</p>
      </div>

      <div className={styles.body}>
        <div className={styles.cover}>
          {project.cover && (
            <img src={project.cover} alt={`${project.title} 대표 화면`} />
          )}
        </div>

        <div className={styles.info}>
          <dl className={styles.facts}>
            <div>
              <dt>기간</dt>
              <dd>{project.period}</dd>
            </div>
            <div>
              <dt>인원</dt>
              <dd>{project.members}</dd>
            </div>
            {!project.contributions && (
              <div className={styles.wide}>
                <dt>내 역할</dt>
                <dd>{project.role}</dd>
              </div>
            )}
            <div className={styles.wide}>
              <dt>사용 기술</dt>
              <dd>
                <ul className={styles.stack}>
                  {project.stack.map((item) => (
                    <li key={item}>
                      <Badge>{item}</Badge>
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          </dl>

          {project.contributions && (
            <div className={styles.box}>
              <p className={styles.boxLabel}>내가 맡은 일</p>
              <ul className={styles.points}>
                {project.contributions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          <div>
            <p className={styles.subTitle}>핵심 포인트</p>
            <ul className={styles.points}>
              {project.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className={styles.result}>
            <p className={styles.boxLabel}>결과 · 배운 점</p>
            <p>{project.result}</p>
          </div>

          <div className={styles.actions}>
            {project.detail && (
              <Button to={`/projects/${project.slug}`}>상세보기</Button>
            )}
            {links.github && (
              <Button variant="secondary" href={links.github}>
                GitHub
              </Button>
            )}
            {links.demo && (
              <Button variant="secondary" href={links.demo}>
                배포
              </Button>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

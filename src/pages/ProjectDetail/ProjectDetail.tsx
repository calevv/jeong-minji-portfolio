import { Link, useParams } from "react-router";
import {
  kindLabel,
  statusLabel,
  statusTone,
} from "@/components/project/projectLabels";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { projects } from "@/data/projects";
import NotFound from "@/pages/NotFound/NotFound";
import styles from "./ProjectDetail.module.css";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project || !project.detail) {
    return <NotFound />;
  }

  const { detail, links } = project;

  const detailProjects = projects.filter((item) => item.detail);
  const currentIndex = detailProjects.findIndex(
    (item) => item.slug === project.slug,
  );
  const nextProject =
    detailProjects.length > 1
      ? detailProjects[(currentIndex + 1) % detailProjects.length]
      : undefined;

  return (
    <article>
      <header className={styles.hero}>
        <div className={`${styles.inner} ${styles.heroBody}`}>
          <Link to="/#projects" className={styles.back}>
            <span aria-hidden="true">←</span> 프로젝트 목록
          </Link>
          <div className={styles.badges}>
            <Badge tone={statusTone[project.status]}>
              {statusLabel[project.status]}
            </Badge>
            <Badge>{kindLabel[project.kind]}</Badge>
          </div>
          <h1 className={styles.title}>{project.title}</h1>
          <p className={styles.summary}>{project.summary}</p>
          <div className={styles.actions}>
            {links.demo && <Button href={links.demo}>배포 사이트</Button>}
            {links.github && (
              <Button variant="secondary" href={links.github}>
                GitHub
              </Button>
            )}
            {links.velog && (
              <Button variant="secondary" href={links.velog}>
                Velog 기록
              </Button>
            )}
          </div>
        </div>
      </header>

      <div className={`${styles.inner} ${styles.overview}`}>
        <dl className={styles.facts}>
          <div>
            <dt>기간</dt>
            <dd>{project.period}</dd>
          </div>
          <div>
            <dt>인원</dt>
            <dd>{project.members}</dd>
          </div>
          {project.kind === "personal" && (
            <div>
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

        <div className={styles.cover}>
          {project.cover ? (
            <img src={project.cover} alt={`${project.title} 대표 화면`} />
          ) : (
            <span>[대표 화면 스크린샷]</span>
          )}
        </div>
      </div>
      <div className={styles.content}>
        <section className={styles.block}>
          <h2 className={styles.blockTitle}>프로젝트 개요</h2>
          <ul className={styles.points}>
            {detail.overview.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        {detail.screens.length > 0 && (
          <section className={styles.block}>
            <h2 className={styles.blockTitle}>핵심 화면</h2>
            <div className={styles.screens}>
              {detail.screens.map((screen, index) => (
                <figure key={index} className={styles.screen}>
                  <div className={styles.screenImage}>
                    {screen.image ? (
                      <img src={screen.image} alt={screen.caption} />
                    ) : (
                      <span>[스크린샷]</span>
                    )}
                  </div>
                  <figcaption className={styles.caption}>
                    {screen.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}

        {detail.techStack && (
          <section className={styles.block}>
            <h2 className={styles.blockTitle}>기술 스택</h2>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th scope="col">분야</th>
                  <th scope="col">기술</th>
                </tr>
              </thead>
              <tbody>
                {detail.techStack.map((row) => (
                  <tr key={row.area}>
                    <th scope="row">{row.area}</th>
                    <td>{row.items}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        )}

        {detail.flow && (
          <section className={styles.block}>
            <h2 className={styles.blockTitle}>
              작동 흐름: {detail.flow.title}
            </h2>
            <p className={styles.text}>{detail.flow.description}</p>
            <ol className={styles.flow}>
              {detail.flow.steps.map((step, index) => (
                <li key={step} className={styles.flowStep}>
                  <span className={styles.flowNumber} aria-hidden="true">
                    {index + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
            {detail.flow.notes && (
              <ul className={styles.points}>
                {detail.flow.notes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            )}
          </section>
        )}

        <section className={styles.block}>
          <h2 className={styles.blockTitle}>
            {project.kind === "team" ? "내가 맡은 일" : "주요 구현"}
          </h2>
          {detail.implementations.map((group, index) => (
            <div key={group.title ?? index} className={styles.group}>
              {group.title && (
                <h3 className={styles.groupTitle}>{group.title}</h3>
              )}
              <ul className={styles.points}>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {detail.decisions && (
          <section className={styles.block}>
            <h2 className={styles.blockTitle}>기술적 의사결정</h2>
            <div className={styles.cards}>
              {detail.decisions.map((item) => (
                <article key={item.title} className={styles.card}>
                  <h3 className={styles.groupTitle}>{item.title}</h3>
                  <p className={styles.text}>{item.description}</p>
                </article>
              ))}
            </div>
          </section>
        )}

        {detail.troubleshooting.length > 0 && (
          <section className={styles.block}>
            <h2 className={styles.blockTitle}>트러블슈팅</h2>
            <div className={styles.cards}>
              {detail.troubleshooting.map((item) => (
                <article key={item.title} className={styles.card}>
                  <h3 className={styles.groupTitle}>{item.title}</h3>
                  <dl className={styles.troubleList}>
                    <div>
                      <dt>문제</dt>
                      <dd>{item.problem}</dd>
                    </div>
                    <div>
                      <dt>원인</dt>
                      <dd>{item.cause}</dd>
                    </div>
                    <div>
                      <dt>해결</dt>
                      <dd>{item.solution}</dd>
                    </div>
                    {item.learned && (
                      <div>
                        <dt>배운 점</dt>
                        <dd>{item.learned}</dd>
                      </div>
                    )}
                  </dl>
                  {item.code && (
                    <pre className={styles.code}>
                      <code>{item.code}</code>
                    </pre>
                  )}
                </article>
              ))}
            </div>
          </section>
        )}

        <section className={styles.block}>
          <h2 className={styles.blockTitle}>배운 점</h2>
          <ul className={styles.points}>
            {detail.learned.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        {detail.structure && (
          <section className={styles.block}>
            <h2 className={styles.blockTitle}>폴더 구조</h2>
            <pre className={styles.code}>
              <code>{detail.structure}</code>
            </pre>
          </section>
        )}

        {nextProject && (
          <nav className={styles.next} aria-label="다음 프로젝트">
            <span className={styles.nextLabel}>다음 프로젝트</span>
            <Link
              to={`/projects/${nextProject.slug}`}
              className={styles.nextLink}
            >
              {nextProject.title} <span aria-hidden="true">→</span>
            </Link>
          </nav>
        )}
      </div>
    </article>
  );
}

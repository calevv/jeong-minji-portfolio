import ProjectItem from "@/components/project/ProjectItem";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import { projects } from "@/data/projects";
import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <Section id="projects" tone="tint">
      <div className={styles.projects}>
        <SectionHeader
          eyebrow="PROJECTS"
          title="프로젝트"
          description="만든 개수보다, 어떻게 결정하고 해결했는지를 정리했습니다."
        />
        <div className={styles.list}>
          {projects.map((project) => (
            <ProjectItem key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </Section>
  );
}

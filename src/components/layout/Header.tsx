import { Link, useLocation } from "react-router";
import useActiveSection from "@/hooks/useActiveSection";
import Logo from "./Logo";
import styles from "./Header.module.css";

const menu = [
  { id: "about", label: "소개" },
  { id: "stack", label: "기술 스택" },
  { id: "projects", label: "프로젝트" },
  { id: "contact", label: "연락처" },
];

const sectionIds = menu.map((item) => item.id);

export default function Header() {
  const { pathname } = useLocation();
  const spyId = useActiveSection(sectionIds, pathname === "/");
  const activeId = pathname.startsWith("/projects/") ? "projects" : spyId;

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Logo />
        <nav aria-label="주요 메뉴">
          <ul className={styles.list}>
            {menu.map((item) => {
              const isActive = activeId === item.id;
              return (
                <li key={item.id}>
                  <Link
                    to={`/#${item.id}`}
                    className={
                      isActive ? `${styles.link} ${styles.active}` : styles.link
                    }
                    aria-current={isActive ? "location" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}

import { Link } from "react-router";
import Logo from "./Logo";
import styles from "./Header.module.css";

const menu = [
  { id: "about", label: "소개" },
  { id: "stack", label: "기술 스택" },
  { id: "projects", label: "프로젝트" },
  { id: "contact", label: "연락처" },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Logo />
        <nav aria-label="주요 메뉴">
          <ul className={styles.list}>
            {menu.map((item) => (
              <li key={item.id}>
                <Link to={`/#${item.id}`} className={styles.link}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

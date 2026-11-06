import { Link } from "react-router";
import styles from "./Logo.module.css";

export default function Logo() {
  return (
    <Link to="/" className={styles.logo}>
      <span aria-hidden="true">{"<>"}</span>
      정민지
    </Link>
  );
}

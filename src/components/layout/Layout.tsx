import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import styles from "./Layout.module.css";

export default function Layout() {
  const { hash, key } = useLocation();

  useEffect(() => {
    if (hash) {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      document
        .getElementById(hash.slice(1))
        ?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
      return;
    }
    window.scrollTo(0, 0);
  }, [hash, key]);

  return (
    <div>
      <a href="#main" className={styles.skipLink}>
        본문 바로가기
      </a>
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

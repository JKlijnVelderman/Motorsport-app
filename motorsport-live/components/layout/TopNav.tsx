import styles from "./TopNav.module.css";

export default function TopNav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          Motorsport <span>Live</span>
        </div>

        <div className={styles.menu}>
          <a className={styles.link} href="/">Live</a>
          <a className={styles.link} href="/schedule">Schedule</a>
          <a className={styles.link} href="/series">Series</a>
        </div>
      </div>
    </nav>
  );
}

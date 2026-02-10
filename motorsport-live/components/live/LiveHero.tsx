"use client";

import styles from "./LiveHero.module.css";

export default function LiveHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.label}>LIVE NOW</div>
      <h1 className={styles.title}>Formula 1</h1>
      <div className={styles.subtitle}>
        Bahrain Grand Prix · Qualifying
      </div>
    </section>
  );
}

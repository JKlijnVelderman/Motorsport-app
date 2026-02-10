import styles from "./SessionTimeline.module.css";

export default function SessionTimeline() {
const sessions = [
  {
    id: 1,
    series: "f1",
    seriesName: "Formula 1",
    type: "Race",
    eventName: "Bahrain GP",
    startTime: new Date().toISOString(),
  },
  {
    id: 2,
    series: "f1",
    seriesName: "Formula 1",
    type: "Qualifying",
    eventName: "Monaco GP",
    startTime: new Date().toISOString(),
  },
  {
    id: 3,
    series: "motogp",
    seriesName: "MotoGP",
    type: "Practice",
    eventName: "Spanish GP",
    startTime: new Date(new Date().getTime() + 7200 * 1000).toISOString(),
  },
  {
    id: 4,
    series: "motogp",
    seriesName: "MotoGP",
    type: "Race",
    eventName: "Italian GP",
    startTime: new Date(new Date().getTime() + 10800 * 1000).toISOString(),
  },
  {
    id: 5,
    series: "wec",
    seriesName: "WEC",
    type: "Race",
    eventName: "24 Hours of Le Mans",
    startTime: new Date(new Date().getTime() + 14400 * 1000).toISOString(),
  },
  {
    id: 6,
    series: "f1",
    seriesName: "Formula 1",
    type: "Practice",
    eventName: "Singapore GP",
    startTime: new Date(new Date().getTime() + 18000 * 1000).toISOString(),
  },
  {
    id: 7,
    series: "wrc",
    seriesName: "WRC",
    type: "Stage",
    eventName: "Rally Finland",
    startTime: new Date(new Date().getTime() + 21600 * 1000).toISOString(),
  },
  {
    id: 8,
    series: "wrc",
    seriesName: "WRC",
    type: "Stage",
    eventName: "Rally Monte Carlo",
    startTime: new Date(new Date().getTime() + 25200 * 1000).toISOString(),
  },
  {
    id: 9,
    series: "indycar",
    seriesName: "IndyCar",
    type: "Race",
    eventName: "Indianapolis 500",
    startTime: new Date(new Date().getTime() + 28800 * 1000).toISOString(),
  },
  {
    id: 10,
    series: "dtm",
    seriesName: "DTM",
    type: "Race",
    eventName: "DTM Hockenheim",
    startTime: new Date(new Date().getTime() + 32400 * 1000).toISOString(),
  },
];


  return (
    <section className={styles.wrapper}>
      <div className={styles.day}>
        <div className={styles.dayTitle}>This Week</div>

        {sessions.map(session => (
          <div key={session.id} className={styles.card}>
            <div className={styles.left}>
              <span
                className={styles.badge}
                style={{ background: "var(--f1)" }}
              >
                {session.seriesName}
              </span>

              <div>
                <strong>{session.type}</strong>
                <div className={styles.time}>{session.eventName}</div>
              </div>
            </div>

            <div className={styles.time}>15:00</div>
          </div>
        ))}
      </div>
    </section>
  );
}

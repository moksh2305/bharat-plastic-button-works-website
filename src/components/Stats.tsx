import styles from './Stats.module.css';

export default function Stats() {
  const stats = [
    { value: '45+', label: 'Years of Experience' },
    { value: '20+', label: 'Product Categories' },
    { value: '3+', label: 'Government Clients' },
    { value: 'Pan India', label: 'Supply Network' }
  ];

  return (
    <section className={styles.statsSection}>
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <p className={styles.subtitle}>OUR STRENGTH</p>
          <h2>BUILT TO DELIVER.<br/>AT SCALE.</h2>
        </div>
        <div className={styles.statsGrid}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.statItem}>
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

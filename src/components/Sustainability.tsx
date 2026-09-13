import styles from './Sustainability.module.css';

export default function Sustainability() {
  return (
    <section id="sustainability" className={styles.sustainabilitySection}>
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <p className={styles.subtitle}>SUSTAINABILITY</p>
          <h2>RESPONSIBLE TODAY.<br/>STRONGER TOMORROW.</h2>
          <p className={styles.description}>
            We are committed to sustainable manufacturing practices, efficient resource use and responsible growth — because progress should protect the planet we all depend on.
          </p>
          <button className="btn btn-primary" style={{ backgroundColor: '#2c5e3b' }}>Our Commitment &rarr;</button>
        </div>
        <div className={styles.imageWrapper}>
          {/* Using a placeholder for the leaf/sustainability visual */}
          <img src="https://placehold.co/600x400/f4f4f5/2c5e3b?text=Sustainability+Leaf" alt="Sustainability" className={styles.image} />
        </div>
      </div>
    </section>
  );
}

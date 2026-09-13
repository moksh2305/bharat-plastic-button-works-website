import styles from './Materials.module.css';

export default function Materials() {
  const materials = [
    {
      title: 'LD',
      description: 'Lightweight, Reliable, Versatile.',
      number: '01',
      image: 'https://placehold.co/400x300/e2e8f0/64748b?text=LD+Polymer'
    },
    {
      title: 'LLDPE',
      description: 'Flexibility for demanding applications.',
      number: '02',
      image: 'https://placehold.co/400x300/e2e8f0/64748b?text=LLDPE+Polymer'
    },
    {
      title: 'HM-HDPE',
      description: 'High strength, Higher performance.',
      number: '03',
      image: 'https://placehold.co/400x300/e2e8f0/64748b?text=HM-HDPE+Polymer'
    },
    {
      title: 'PVC',
      description: 'Durable, Multi-purpose.',
      number: '04',
      image: 'https://placehold.co/400x300/e2e8f0/64748b?text=PVC+Polymer'
    }
  ];

  return (
    <section id="materials" className={styles.materialsSection}>
      <div className={`container ${styles.container}`}>
        <div className={styles.headerInfo}>
          <p className={styles.subtitle}>OUR MATERIALS</p>
          <h2>ENGINEERED POLYMERS FOR REAL-WORLD DEMANDS.</h2>
          <p className={styles.description}>
            High-performance polymers.<br/>
            Endless applications.<br/>
            Customized to your specification.
          </p>
          <a href="#products" className={styles.exploreLink}>&rarr; Explore Materials</a>
        </div>
        
        <div className={styles.grid}>
          {materials.map((mat) => (
            <div key={mat.number} className={styles.card}>
              <img src={mat.image} alt={mat.title} className={styles.image} />
              <div className={styles.cardContent}>
                <h3>{mat.title}</h3>
                <p>{mat.description}</p>
                <span className={styles.number}>{mat.number}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

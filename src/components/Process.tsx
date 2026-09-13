import styles from './Process.module.css';

export default function Process() {
  const steps = [
    { number: '01', title: 'EXTRUSION', desc: 'Melting possibilities' },
    { number: '02', title: 'WEAVING', desc: 'Building strength' },
    { number: '03', title: 'LAMINATION', desc: 'Enhancing performance' },
    { number: '04', title: 'PRINTING', desc: 'Your brand, our precision' },
    { number: '05', title: 'STITCHING', desc: 'Assured durability' },
    { number: '06', title: 'QUALITY CONTROL', desc: 'Zero compromise' }
  ];

  return (
    <section id="process" className={styles.processSection}>
      <div className={styles.backgroundWrapper}>
        <img src="https://placehold.co/1920x800/1a1a1a/333333?text=Manufacturing+Plant" alt="Manufacturing Plant" className={styles.bgImage} />
        <div className={styles.overlay}></div>
      </div>
      
      <div className={`container ${styles.content}`}>
        <div className={styles.header}>
          <p className={styles.subtitle}>OUR PROCESS</p>
          <h2>PRECISION<br/>AT EVERY STAGE.</h2>
          <p className={styles.description}>
            A fully integrated manufacturing setup in Bhiwandi,
            with advanced extrusion lines, weaving looms,
            stitching and printing machinery - ensuring
            a defect-free range at industrial scale.
          </p>
          <button className="btn btn-outline" style={{ borderColor: 'white', color: 'white' }}>Take a Virtual Tour &rarr;</button>
        </div>
        
        <div className={styles.timeline}>
          {steps.map((step) => (
            <div key={step.number} className={styles.step}>
              <div className={styles.stepNumber}>{step.number}</div>
              <h4>{step.title}</h4>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
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
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6 }}
        >
          <p className={styles.subtitle}>OUR PROCESS</p>
          <h2>PRECISION<br/>AT EVERY STAGE.</h2>
          <p className={styles.description}>
            A fully integrated manufacturing setup in Bhiwandi,
            with advanced extrusion lines, weaving looms,
            stitching and printing machinery - ensuring
            a defect-free range at industrial scale.
          </p>
          <button className="btn btn-outline" style={{ borderColor: 'white', color: 'white' }}>Take a Virtual Tour &rarr;</button>
        </motion.div>
        
        <motion.div 
          className={styles.timeline}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
            hidden: {}
          }}
        >
          {steps.map((step) => (
            <motion.div 
              key={step.number} 
              className={styles.step}
              variants={{
                hidden: { opacity: 0, x: 20 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
              }}
            >
              <div className={styles.stepNumber}>{step.number}</div>
              <h4>{step.title}</h4>
              <p>{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

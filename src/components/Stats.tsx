'use client';

import { motion } from 'framer-motion';
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
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6 }}
        >
          <p className={styles.subtitle}>OUR STRENGTH</p>
          <h2>BUILT TO DELIVER.<br/>AT SCALE.</h2>
        </motion.div>
        <motion.div 
          className={styles.statsGrid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
            hidden: {}
          }}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              className={styles.statItem}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.5, type: 'spring' } }
              }}
            >
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

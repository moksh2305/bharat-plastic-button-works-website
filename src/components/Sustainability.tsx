'use client';

import { motion } from 'framer-motion';
import styles from './Sustainability.module.css';

export default function Sustainability() {
  return (
    <section id="sustainability" className={styles.sustainabilitySection}>
      <div className={`container ${styles.container}`}>
        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6 }}
        >
          <p className={styles.subtitle}>SUSTAINABILITY</p>
          <h2>RESPONSIBLE TODAY.<br/>STRONGER TOMORROW.</h2>
          <p className={styles.description}>
            We are committed to sustainable manufacturing practices, efficient resource use and responsible growth — because progress should protect the planet we all depend on.
          </p>
          <button className="btn btn-primary" style={{ backgroundColor: '#2c5e3b' }}>Our Commitment &rarr;</button>
        </motion.div>
        <motion.div 
          className={styles.imageWrapper}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Using a nature/sustainability visual */}
          <img src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80&w=600&h=400" alt="Sustainability" className={styles.image} />
        </motion.div>
      </div>
    </section>
  );
}

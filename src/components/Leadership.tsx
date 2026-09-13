'use client';

import { motion } from 'framer-motion';
import styles from './Leadership.module.css';

export default function Leadership() {
  return (
    <section id="leadership" className={styles.leadershipSection}>
      <div className={`container ${styles.container}`}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6 }}
        >
          <p className={styles.subtitle}>OUR LEADERSHIP</p>
          <h2>TWO GENERATIONS.<br/>ONE STANDARD.</h2>
          <p className={styles.description}>
            Under the guidance of founder Mr. Bharat Shah and Director Mr. Nirav Shah, we have grown into a full-scale manufacturer serving government bodies, construction giants and global logistics operators.
          </p>
          <button className="btn btn-outline" style={{ borderColor: 'white', color: 'white' }}>Our Story &rarr;</button>
        </motion.div>
        
        <motion.div 
          className={styles.profiles}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
            hidden: {}
          }}
        >
          <motion.div 
            className={styles.profileCard}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
          >
            <img src="https://placehold.co/400x500/333333/cccccc?text=Mr.+Bharat+Shah" alt="Mr. Bharat Shah" className={styles.image} />
            <div className={styles.info}>
              <h3>Mr. Bharat Shah</h3>
              <p className={styles.title}>Founder</p>
              <p className={styles.quote}>"A vision that laid the foundation for trust, quality and long-term relationships."</p>
            </div>
          </motion.div>
          <motion.div 
            className={styles.profileCard}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
          >
            <img src="https://placehold.co/400x500/333333/cccccc?text=Mr.+Nirav+Shah" alt="Mr. Nirav Shah" className={styles.image} />
            <div className={styles.info}>
              <h3>Mr. Nirav Shah</h3>
              <p className={styles.title}>Director</p>
              <p className={styles.quote}>"Driving innovation, scale and global partnerships for a stronger tomorrow."</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

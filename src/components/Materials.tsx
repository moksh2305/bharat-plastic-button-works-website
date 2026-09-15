'use client';

import { motion } from 'framer-motion';
import styles from './Materials.module.css';

export default function Materials() {
  const materials = [
    {
      title: 'LD',
      description: 'Lightweight, Reliable, Versatile.',
      number: '01',
      image: 'https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?auto=format&fit=crop&q=80&w=400&h=300'
    },
    {
      title: 'LLDPE',
      description: 'Flexibility for demanding applications.',
      number: '02',
      image: 'https://images.unsplash.com/photo-1532153259564-bd51214cb831?auto=format&fit=crop&q=80&w=400&h=300'
    },
    {
      title: 'HM-HDPE',
      description: 'High strength, Higher performance.',
      number: '03',
      image: 'https://images.unsplash.com/photo-1611078810793-18151522a945?auto=format&fit=crop&q=80&w=400&h=300'
    },
    {
      title: 'PVC',
      description: 'Durable, Multi-purpose.',
      number: '04',
      image: 'https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?auto=format&fit=crop&q=80&w=400&h=300'
    }
  ];

  return (
    <section id="materials" className={styles.materialsSection}>
      <div className={`container ${styles.container}`}>
        <motion.div 
          className={styles.headerInfo}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6 }}
        >
          <p className={styles.subtitle}>OUR MATERIALS</p>
          <h2>ENGINEERED POLYMERS FOR REAL-WORLD DEMANDS.</h2>
          <p className={styles.description}>
            High-performance polymers.<br/>
            Endless applications.<br/>
            Customized to your specification.
          </p>
          <a href="#products" className={styles.exploreLink}>&rarr; Explore Materials</a>
        </motion.div>
        
        <motion.div 
          className={styles.grid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
            hidden: {}
          }}
        >
          {materials.map((mat) => (
            <motion.div 
              key={mat.number} 
              className={styles.card}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
            >
              <img src={mat.image} alt={mat.title} className={styles.image} />
              <div className={styles.cardContent}>
                <h3>{mat.title}</h3>
                <p>{mat.description}</p>
                <span className={styles.number}>{mat.number}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

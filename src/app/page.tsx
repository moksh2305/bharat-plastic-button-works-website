'use client';

import { motion } from 'framer-motion';
import styles from './page.module.css';
import Materials from '@/components/Materials';
import Process from '@/components/Process';
import Stats from '@/components/Stats';
import Products from '@/components/Products';
import Leadership from '@/components/Leadership';
import Sustainability from '@/components/Sustainability';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className={styles.subtitle}>POLYMERS / PRODUCTS / A STRONGER TOMORROW</p>
            <h1 className={styles.title}>
              MORE <br />
              THAN PACKAGING.<br />
              A STRONGER<br />
              TOMORROW.
            </h1>
            <p className={styles.description}>
              LD - LLDPE - HM-HDPE - PVC<br/>
              Industrial-grade woven & flexible packaging, manufactured to your exact specification.
            </p>
            <div className={styles.actions}>
              <button className="btn btn-primary">Explore Our Products</button>
              <button className="btn btn-outline">Request a Quote</button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className={styles.trustBanner}>
        <div className="container">
          <motion.div 
            className={styles.trustHeader}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6 }}
          >
            <h2>TRUSTED BY THOSE<br/>WHO KEEP INDIA MOVING.</h2>
            <p>From national security to global trade, our packaging supports industries where reliability is non-negotiable.</p>
          </motion.div>
          <motion.div 
            className={styles.clientGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } },
              hidden: {}
            }}
          >
            {[{title: "INDIAN NAVY", desc: "For a stronger, safer nation."},
              {title: "INDIAN RAILWAYS", desc: "Powering progress."},
              {title: "INTERNATIONAL CARGO", desc: "Across oceans. Without compromise."},
              {title: "CONSTRUCTION & INFRASTRUCTURE", desc: "Building a stronger India."}
            ].map((client, i) => (
              <motion.div 
                key={i} 
                className={styles.clientCard}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
              >
                <h3>{client.title}</h3>
                <p>{client.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      <Materials />
      <Process />
      <Stats />
      <Products />
      <Leadership />
      <Sustainability />
      <Contact />
      
    </main>
  );
}

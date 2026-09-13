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
        </div>
      </section>

      {/* Trust Banner */}
      <section className={styles.trustBanner}>
        <div className="container">
          <div className={styles.trustHeader}>
            <h2>TRUSTED BY THOSE<br/>WHO KEEP INDIA MOVING.</h2>
            <p>From national security to global trade, our packaging supports industries where reliability is non-negotiable.</p>
          </div>
          <div className={styles.clientGrid}>
            <div className={styles.clientCard}>
              <h3>INDIAN NAVY</h3>
              <p>For a stronger, safer nation.</p>
            </div>
            <div className={styles.clientCard}>
              <h3>INDIAN RAILWAYS</h3>
              <p>Powering progress.</p>
            </div>
            <div className={styles.clientCard}>
              <h3>INTERNATIONAL CARGO</h3>
              <p>Across oceans. Without compromise.</p>
            </div>
            <div className={styles.clientCard}>
              <h3>CONSTRUCTION & INFRASTRUCTURE</h3>
              <p>Building a stronger India.</p>
            </div>
          </div>
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

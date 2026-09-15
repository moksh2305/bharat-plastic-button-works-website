'use client';

import { motion } from 'framer-motion';
import styles from './Products.module.css';

export default function Products() {
  const products = [
    { title: 'LDPE Garbage Bags', desc: 'Premium, fully customizable bags for domestic and commercial use.', image: 'https://images.unsplash.com/photo-1605600659908-0ef719419d41?auto=format&fit=crop&q=80&w=600&h=600' },
    { title: 'LDPE Membrane Sheet', desc: 'High-grade sheets for PCC construction in multiple thicknesses.', image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=600&h=600' },
    { title: 'Barricade Tapes', desc: 'India\'s largest manufacturer of warning tapes.', image: 'https://images.unsplash.com/photo-1596700683070-5aa60b29cefa?auto=format&fit=crop&q=80&w=600&h=600' },
    { title: 'Cargo Pallet Covers', desc: 'Durable protection for international cargo and shipping.', image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=600&h=600' }
  ];

  return (
    <section id="products" className={styles.productsSection}>
      <div className={`container ${styles.container}`}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <p className={styles.subtitle}>OUR PRODUCTS</p>
            <h2>PACKAGING SOLUTIONS<br/>FOR EVERY INDUSTRY.</h2>
          </div>
          <p className={styles.description}>
            From bulk packaging to customized flexible solutions, we manufacture products that perform in the toughest conditions.
            <br/><br/>
            <a href="#all-products" className="btn btn-primary">&rarr; View All Products</a>
          </p>
        </motion.div>
        
        <motion.div 
          className={styles.productGrid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
            hidden: {}
          }}
        >
          {products.map((prod, index) => (
            <motion.div 
              key={index} 
              className={styles.productCard}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
            >
              <div className={styles.imageWrapper}>
                <img src={prod.image} alt={prod.title} className={styles.image} />
              </div>
              <div className={styles.content}>
                <h3>{prod.title}</h3>
                <p>{prod.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

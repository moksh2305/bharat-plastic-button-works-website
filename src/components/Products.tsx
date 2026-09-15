'use client';

import { motion } from 'framer-motion';
import styles from './Products.module.css';

export default function Products() {
  const productCategories = [
    { 
      title: 'Garbage & Waste Management', 
      desc: 'Biodegradable, Biohazard, Black, and LD Garbage Bags for domestic, restaurant, and industrial use.', 
      image: 'https://images.unsplash.com/photo-1605600659908-0ef719419d41?auto=format&fit=crop&q=80&w=600&h=600' 
    },
    { 
      title: 'Sheets & Rolls', 
      desc: 'LDPE Membrane Sheets for PCC construction, Barsati Plastic Sheets, and versatile plastic rolls.', 
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=600&h=600' 
    },
    { 
      title: 'Packaging Materials', 
      desc: 'Stretch & Shrink Films, Zip Lock Poly Bags, Self-Adhesive PVC Bags, and Air Bubble Covers.', 
      image: 'https://images.unsplash.com/photo-1606189934177-d6e27163013d?auto=format&fit=crop&q=80&w=600&h=600' 
    },
    { 
      title: 'Cargo Pallet Covers', 
      desc: 'Heavy-duty durable protection for domestic and international cargo shipping.', 
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=600&h=600' 
    },
    { 
      title: 'Warning / Barrication Tapes', 
      desc: 'High-visibility safety and warning tapes for construction sites and hazard zones.', 
      image: 'https://images.unsplash.com/photo-1596700683070-5aa60b29cefa?auto=format&fit=crop&q=80&w=600&h=600' 
    },
    { 
      title: 'PVC Tarpaulins & Covers', 
      desc: 'Waterproof PVC Tarpaulins and durable Catering Table Covers for extreme outdoor use.', 
      image: 'https://images.unsplash.com/photo-1610484558509-f6e07b8b7e51?auto=format&fit=crop&q=80&w=600&h=600' 
    }
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
            <p className={styles.subtitle}>OUR CATALOG</p>
            <h2>COMPREHENSIVE PACKAGING<br/>SOLUTIONS.</h2>
          </div>
          <p className={styles.description}>
            From biodegradable garbage bags to heavy-duty construction membrane sheets, our extensive product line is customizable to your specific requirements.
            <br/><br/>
            <a href="#contact" className="btn btn-primary">&rarr; Request a Quote</a>
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
          {productCategories.map((prod, index) => (
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

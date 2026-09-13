import styles from './Products.module.css';

export default function Products() {
  const products = [
    { title: 'LDPE Garbage Bags', desc: 'Premium, fully customizable bags for domestic and commercial use.', image: 'https://placehold.co/600x600/e2e8f0/64748b?text=Garbage+Bags' },
    { title: 'LDPE Membrane Sheet', desc: 'High-grade sheets for PCC construction in multiple thicknesses.', image: 'https://placehold.co/600x600/e2e8f0/64748b?text=Membrane+Sheet' },
    { title: 'Barricade Tapes', desc: 'India\'s largest manufacturer of warning tapes.', image: 'https://placehold.co/600x600/e2e8f0/64748b?text=Warning+Tapes' },
    { title: 'Cargo Pallet Covers', desc: 'Durable protection for international cargo and shipping.', image: 'https://placehold.co/600x600/e2e8f0/64748b?text=Pallet+Covers' }
  ];

  return (
    <section id="products" className={styles.productsSection}>
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <div>
            <p className={styles.subtitle}>OUR PRODUCTS</p>
            <h2>PACKAGING SOLUTIONS<br/>FOR EVERY INDUSTRY.</h2>
          </div>
          <p className={styles.description}>
            From bulk packaging to customized flexible solutions, we manufacture products that perform in the toughest conditions.
            <br/><br/>
            <a href="#all-products" className="btn btn-primary">&rarr; View All Products</a>
          </p>
        </div>
        
        <div className={styles.productGrid}>
          {products.map((prod, index) => (
            <div key={index} className={styles.productCard}>
              <div className={styles.imageWrapper}>
                <img src={prod.image} alt={prod.title} className={styles.image} />
              </div>
              <div className={styles.content}>
                <h3>{prod.title}</h3>
                <p>{prod.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

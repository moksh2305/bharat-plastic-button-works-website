import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.footerBrand}>
          <h3>BHARAT PLASTIC BUTTON WORKS</h3>
          <p>India's Trusted Packaging Manufacturer<br/>Since 1980</p>
        </div>
        <div className={styles.footerLinks}>
          <h4>Company</h4>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#leadership">Leadership</a></li>
            <li><a href="#sustainability">Sustainability</a></li>
          </ul>
        </div>
        <div className={styles.footerLinks}>
          <h4>Products</h4>
          <ul>
            <li><a href="#products">Garbage Bags</a></li>
            <li><a href="#products">Membrane Sheets</a></li>
            <li><a href="#products">Stretch Films</a></li>
          </ul>
        </div>
        <div className={styles.footerContact}>
          <h4>Contact</h4>
          <p>Building No. 84, Unit No. 2 & 3,<br/>Indian Corporation, Mankoli Naka,<br/>Bhiwandi, Thane – 421302</p>
          <p>+91 98213 81597</p>
        </div>
      </div>
      <div className={`container ${styles.footerBottom}`}>
        <p>&copy; {new Date().getFullYear()} Bharat Plastic Button Works. All rights reserved.</p>
        <p>Built in India. For a stronger world.</p>
      </div>
    </footer>
  );
}

import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.navContainer}`}>
        <div className={styles.logo}>
          <Link href="/">
            <span className={styles.brandName}>BHARAT PLASTIC</span>
          </Link>
        </div>
        <div className={styles.navLinks}>
          <Link href="#materials">Materials</Link>
          <Link href="#process">Manufacturing</Link>
          <Link href="#products">Products</Link>
          <Link href="#sustainability">Sustainability</Link>
          <Link href="#contact">Contact</Link>
        </div>
        <div className={styles.navActions}>
          <a href="#contact" className="btn btn-primary">Enquire Now</a>
        </div>
      </div>
    </nav>
  );
}

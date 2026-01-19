import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <img 
            src="/images/properties/Habo Logo.png" 
            alt="Habo Development" 
            className={styles.logoImage}
          />
          <span className={styles.logoText}>Habo Development</span>
        </Link>
        <div className={styles.navLinks}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Feature Project</Link>
          <Link href="/contact">Contact Us</Link>
        </div>
        <Link href="/resident-login" className={styles.loginButton}>
          Resident Login
        </Link>
      </div>
    </nav>
  );
}


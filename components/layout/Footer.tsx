import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.disclaimer}>
          Habo Development is a private ownership platform and is not a separate legal entity.
        </p>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} Habo Development. All rights reserved.
        </p>
      </div>
    </footer>
  );
}


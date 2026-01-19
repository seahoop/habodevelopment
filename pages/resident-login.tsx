import Head from 'next/head';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollAnimation from '@/components/ui/ScrollAnimation';
import styles from '@/styles/ResidentLogin.module.css';

export default function ResidentLogin() {
  return (
    <>
      <Head>
        <title>Resident Login - Habo Development</title>
        <meta name="description" content="Resident login portal for Habo Development." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>
        <section className={styles.content}>
          <div className={styles.container}>
            <ScrollAnimation direction="fade">
              <div className={styles.comingSoonCard}>
                <h1 className={styles.title}>Coming Soon</h1>
                <p className={styles.message}>
                  The Resident Login portal is currently under development.
                  Please check back soon for access to your account.
                </p>
                <Link href="/" className={styles.homeButton}>
                  Return to Home
                </Link>
              </div>
            </ScrollAnimation>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}


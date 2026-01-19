import Head from 'next/head';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ContactForm from '@/components/ui/ContactForm';
import ScrollAnimation from '@/components/ui/ScrollAnimation';
import styles from '@/styles/Contact.module.css';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact - Habo Development</title>
        <meta name="description" content="Get in touch with Habo Development for tenant inquiries or business partnerships." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>
        <section className={styles.header}>
          <div className={styles.container}>
            <h1 className={styles.title}>Contact Us</h1>
            <p className={styles.subtitle}>
              For tenant inquiries or business partnership opportunities, please reach out using the form below.
            </p>
          </div>
        </section>

        <section className={styles.content}>
          <div className={styles.container}>
            <ScrollAnimation direction="up" delay={200}>
              <ContactForm />
            </ScrollAnimation>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}


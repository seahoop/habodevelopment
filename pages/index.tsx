import Head from 'next/head';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollAnimation from '@/components/ui/ScrollAnimation';
import styles from '@/styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Habo Development - Quality-Driven Real Estate Development</title>
        <meta name="description" content="Habo Development is a private ownership platform focused on quality-driven real estate development, asset acquisition, and direct execution." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.container}>
            <h1 className={styles.heroTitle}>Quality-Driven Real Estate Development</h1>
            <p className={styles.heroSubtitle}>
              Long-term asset ownership through direct execution and strategic development
            </p>
            <div className={styles.heroButtons}>
              <Link href="/projects" className={styles.btnPrimary}>
                View Projects
              </Link>
              <Link href="/about" className={styles.btnSecondary}>
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* Profile Section */}
        <section className={styles.profile}>
          <div className={styles.container}>
            <ScrollAnimation direction="up">
              <h2 className={styles.sectionTitle}>Our Approach</h2>
            </ScrollAnimation>
            <div className={styles.profileContent}>
              <div className={styles.profileText}>
                <ScrollAnimation direction="up" delay={100}>
                  <p className={styles.profileParagraph}>
                    Habo Development is a private ownership platform that acquires, rehabilitates, 
                    and manages residential and industrial assets. We focus on long-term value creation 
                    through direct execution and hands-on project oversight.
                  </p>
                </ScrollAnimation>
                <ScrollAnimation direction="up" delay={200}>
                  <p className={styles.profileParagraph}>
                    Our approach combines strategic asset acquisition with comprehensive rehabilitation, 
                    ensuring each property meets our standards for quality, durability, and long-term 
                    performance. We handle every aspect of the development process, from initial 
                    assessment through completion and ongoing management.
                  </p>
                </ScrollAnimation>
                <ScrollAnimation direction="up" delay={300}>
                  <p className={styles.profileParagraph}>
                    With expertise in construction oversight, structural upgrades, electrical systems, 
                    framing, and roofing, we bring institutional-grade execution to every project.
                  </p>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className={styles.values}>
          <div className={styles.container}>
            <ScrollAnimation direction="up">
              <h2 className={styles.sectionTitle}>Core Values</h2>
            </ScrollAnimation>
            <div className={styles.valuesGrid}>
              <ScrollAnimation direction="up" delay={100}>
                <div className={styles.valueCard}>
                  <h3 className={styles.valueTitle}>Direct Execution</h3>
                  <p className={styles.valueText}>
                    Hands-on oversight and direct management of all development activities, 
                    ensuring quality and accountability at every stage.
                  </p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation direction="up" delay={200}>
                <div className={styles.valueCard}>
                  <h3 className={styles.valueTitle}>Long-Term Ownership</h3>
                  <p className={styles.valueText}>
                    Focus on building sustainable, high-quality assets designed for 
                    long-term performance and value retention.
                  </p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation direction="up" delay={300}>
                <div className={styles.valueCard}>
                  <h3 className={styles.valueTitle}>Quality Standards</h3>
                  <p className={styles.valueText}>
                    Institutional-grade construction and rehabilitation standards, 
                    with attention to structural integrity and modern systems.
                  </p>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}


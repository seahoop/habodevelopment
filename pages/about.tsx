import Head from 'next/head';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollAnimation from '@/components/ui/ScrollAnimation';
import styles from '@/styles/About.module.css';

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - Habo Development</title>
        <meta name="description" content="Learn about Habo Development's heritage, expertise, and approach to real estate development." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>
        <section className={styles.header}>
          <div className={styles.container}>
            <h1 className={styles.title}>About Habo Development</h1>
            <p className={styles.subtitle}>
              A private ownership platform with deep expertise in construction and asset management
            </p>
          </div>
        </section>

        <section className={styles.content}>
          <div className={styles.container}>
            <ScrollAnimation direction="up">
              <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Background</h2>
                <ScrollAnimation direction="up" delay={100}>
                  <p className={styles.paragraph}>
                    Habo Development brings together extensive experience in construction oversight, 
                    project management, and hands-on trades expertise. Our background spans structural 
                    engineering, welding, electrical systems, framing, and roofing—providing a 
                    comprehensive foundation for evaluating, acquiring, and developing real estate assets.
                  </p>
                </ScrollAnimation>
                <ScrollAnimation direction="up" delay={200}>
                  <p className={styles.paragraph}>
                    This technical expertise enables us to assess properties with precision, identify 
                    value-creation opportunities, and execute rehabilitation projects with confidence. 
                    We understand both the structural and systems-level requirements of quality 
                    construction, ensuring that every project meets institutional-grade standards.
                  </p>
                </ScrollAnimation>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="up">
              <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Direct Execution</h2>
                <ScrollAnimation direction="up" delay={100}>
                  <p className={styles.paragraph}>
                    Unlike traditional development firms that rely on multiple layers of contractors 
                    and consultants, Habo Development maintains direct oversight of all project phases. 
                    This approach allows us to maintain quality control, manage timelines effectively, 
                    and ensure that every detail aligns with our standards for long-term asset performance.
                  </p>
                </ScrollAnimation>
                <ScrollAnimation direction="up" delay={200}>
                  <p className={styles.paragraph}>
                    Our direct execution model means we're involved from initial property assessment 
                    through final completion and ongoing management. This hands-on approach results in 
                    better outcomes, more efficient processes, and assets that are built to last.
                  </p>
                </ScrollAnimation>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="up">
              <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Areas of Expertise</h2>
                <div className={styles.expertiseGrid}>
                  <ScrollAnimation direction="up" delay={100}>
                    <div className={styles.expertiseItem}>
                      <h3 className={styles.expertiseTitle}>Construction Oversight</h3>
                      <p className={styles.expertiseText}>
                        Comprehensive project management and quality control throughout all construction phases
                      </p>
                    </div>
                  </ScrollAnimation>
                  <ScrollAnimation direction="up" delay={200}>
                    <div className={styles.expertiseItem}>
                      <h3 className={styles.expertiseTitle}>Structural Upgrades</h3>
                      <p className={styles.expertiseText}>
                        Expertise in framing, structural modifications, and building system improvements
                      </p>
                    </div>
                  </ScrollAnimation>
                  <ScrollAnimation direction="up" delay={300}>
                    <div className={styles.expertiseItem}>
                      <h3 className={styles.expertiseTitle}>Asset Management</h3>
                      <p className={styles.expertiseText}>
                        Long-term property management and maintenance for sustained asset performance
                      </p>
                    </div>
                  </ScrollAnimation>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}


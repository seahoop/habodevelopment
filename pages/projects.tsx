import { useState } from 'react';
import Head from 'next/head';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProjectCard from '@/components/projects/ProjectCard';
import ProjectStats from '@/components/projects/ProjectStats';
import ScrollAnimation from '@/components/ui/ScrollAnimation';
import { portfolio } from '@/data/portfolio';
import styles from '@/styles/Projects.module.css';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof portfolio[0] | null>(null);

  const handleProjectClick = (project: typeof portfolio[0]) => {
    setSelectedProject(project);
  };

  const handleCloseStats = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <Head>
        <title>Our Featured Work - Habo Development</title>
        <meta name="description" content="Selected featured projects showcasing Habo Development's quality-driven approach to real estate development." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>
        <section className={styles.header}>
          <div className={styles.container}>
            <h1 className={styles.title}>Our Featured Work</h1>
            <p className={styles.subtitle}>
              Selected projects showcasing our approach to quality-driven development and asset management
            </p>
          </div>
        </section>

        <section className={styles.projects}>
          <div className={styles.container}>
            <ScrollAnimation direction="up">
              <p className={styles.intro}>
                Each project represents our commitment to direct execution, structural integrity, and long-term value creation. 
                These featured developments highlight our expertise across residential and industrial asset classes.
              </p>
            </ScrollAnimation>
            {portfolio.length > 0 ? (
              <div className={styles.grid}>
                {portfolio.map((project, index) => (
                  <ScrollAnimation key={project.id} direction="up" delay={index * 100}>
                    <ProjectCard
                      project={project}
                      onClick={() => handleProjectClick(project)}
                    />
                  </ScrollAnimation>
                ))}
              </div>
            ) : (
              <ScrollAnimation direction="up">
                <div className={styles.emptyState}>
                  <p>Properties will be displayed here once added to the portfolio.</p>
                </div>
              </ScrollAnimation>
            )}
          </div>
        </section>
      </main>

      <ProjectStats project={selectedProject} onClose={handleCloseStats} />

      <Footer />
    </>
  );
}


import { Project } from '@/data/portfolio';
import ImageCarousel from './ImageCarousel';
import styles from './ProjectStats.module.css';

interface ProjectStatsProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectStats({ project, onClose }: ProjectStatsProps) {
  if (!project) return null;

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return '#28a745';
      case 'Under Construction':
        return '#ffc107';
      case 'Planning':
        return '#6c757d';
      default:
        return '#6c757d';
    }
  };

  // Check if model3D is an iframe URL or embed code
  const isIframeUrl = (url: string) => {
    return url.includes('sketchfab.com') || url.includes('iframe') || url.includes('embed');
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          ×
        </button>
        
        <div className={styles.header}>
          <div>
            <h2 className={styles.title}>{project.title}</h2>
            <p className={styles.address}>{project.address}</p>
          </div>
          <span
            className={styles.status}
            style={{ backgroundColor: getStatusColor(project.status) }}
          >
            {project.status}
          </span>
        </div>

        <div className={styles.content}>
          {/* 3D Model Section */}
          {project.model3D && (
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>3D Model</h3>
              <div className={styles.modelContainer}>
                {isIframeUrl(project.model3D) ? (
                  <iframe
                    src={project.model3D}
                    className={styles.model3D}
                    allow="autoplay; fullscreen; vr"
                    allowFullScreen
                    title={`3D Model - ${project.title}`}
                  />
                ) : (
                  <iframe
                    src={project.model3D}
                    className={styles.model3D}
                    allow="autoplay; fullscreen; vr"
                    allowFullScreen
                    title={`3D Model - ${project.title}`}
                  />
                )}
              </div>
            </div>
          )}

          {/* Project Details */}
          <div className={styles.detailsGrid}>
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>Project Type:</span>
              <span className={styles.detailValue}>{project.type}</span>
            </div>
            {project.value > 0 && (
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Value:</span>
                <span className={styles.detailValue}>{formatCurrency(project.value)}</span>
              </div>
            )}
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>Start Date:</span>
              <span className={styles.detailValue}>{project.beginDate}</span>
            </div>
            {project.endDate && (
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>End Date:</span>
                <span className={styles.detailValue}>{project.endDate}</span>
              </div>
            )}
            {project.location && (
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Location:</span>
                <span className={styles.detailValue}>{project.location}</span>
              </div>
            )}
          </div>

          {/* Before/In Progress/After Images */}
          {project.beforeImages && project.inProgressImages && project.afterImages && 
           project.beforeImages.length > 0 && project.inProgressImages.length > 0 && project.afterImages.length > 0 && (
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>Before, In Progress & After</h3>
              <ImageCarousel 
                beforeImages={project.beforeImages}
                inProgressImages={project.inProgressImages}
                afterImages={project.afterImages} 
              />
            </div>
          )}

          {/* Description */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Description</h3>
            <p className={styles.description}>{project.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

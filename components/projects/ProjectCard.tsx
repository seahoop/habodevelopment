import { Project } from '@/data/portfolio';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
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

  return (
    <div className={styles.card} onClick={onClick}>
      <div className={styles.imageContainer}>
        <img 
          src={project.image.replace(/#/g, '%23').replace(/ /g, '%20')} 
          alt={project.title}
          className={styles.image}
          onError={(e) => {
            console.error('Failed to load project image:', project.image);
            // Fallback to placeholder if image fails to load
            (e.target as HTMLImageElement).src = 'https://via.placeholder.com/600x400/cccccc/666666?text=Property+Image';
          }}
        />
        <div className={styles.overlay}>
          <div className={styles.addressContainer}>
            <p className={styles.address}>{project.address}</p>
          </div>
          <div className={styles.statusBadge} style={{ backgroundColor: getStatusColor(project.status) }}>
            {project.status}
          </div>
        </div>
      </div>
    </div>
  );
}

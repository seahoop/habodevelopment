import { useState } from 'react';
import styles from './ImageCarousel.module.css';

interface ImageCarouselProps {
  beforeImages: string[];
  inProgressImages: string[];
  afterImages: string[];
}

export default function ImageCarousel({ beforeImages, inProgressImages, afterImages }: ImageCarouselProps) {
  const [currentBeforeIndex, setCurrentBeforeIndex] = useState(0);
  const [currentInProgressIndex, setCurrentInProgressIndex] = useState(0);
  const [currentAfterIndex, setCurrentAfterIndex] = useState(0);

  const nextBefore = () => {
    setCurrentBeforeIndex((prev) => (prev + 1) % beforeImages.length);
  };

  const prevBefore = () => {
    setCurrentBeforeIndex((prev) => (prev - 1 + beforeImages.length) % beforeImages.length);
  };

  const nextInProgress = () => {
    setCurrentInProgressIndex((prev) => (prev + 1) % inProgressImages.length);
  };

  const prevInProgress = () => {
    setCurrentInProgressIndex((prev) => (prev - 1 + inProgressImages.length) % inProgressImages.length);
  };

  const nextAfter = () => {
    setCurrentAfterIndex((prev) => (prev + 1) % afterImages.length);
  };

  const prevAfter = () => {
    setCurrentAfterIndex((prev) => (prev - 1 + afterImages.length) % afterImages.length);
  };

  // Helper function to encode URLs with spaces and special characters
  const encodeImagePath = (path: string) => {
    return path.replace(/#/g, '%23').replace(/ /g, '%20');
  };

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carouselSection}>
        <h4 className={styles.carouselTitle}>Before</h4>
        <div className={styles.imageWrapper}>
          {beforeImages.length > 1 && (
            <button className={styles.navButton} onClick={prevBefore} aria-label="Previous before image">
              ‹
            </button>
          )}
          <img 
            src={encodeImagePath(beforeImages[currentBeforeIndex])} 
            alt={`Before ${currentBeforeIndex + 1}`}
            className={styles.carouselImage}
            onError={(e) => {
              console.error('Failed to load before image:', beforeImages[currentBeforeIndex]);
              (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x300/cccccc/666666?text=Before+Image';
            }}
          />
          {beforeImages.length > 1 && (
            <button className={styles.navButton} onClick={nextBefore} aria-label="Next before image">
              ›
            </button>
          )}
        </div>
        {beforeImages.length > 1 && (
          <div className={styles.imageCounter}>
            {currentBeforeIndex + 1} / {beforeImages.length}
          </div>
        )}
      </div>

      <div className={styles.carouselSection}>
        <h4 className={styles.carouselTitle}>In Progress</h4>
        <div className={styles.imageWrapper}>
          <button className={styles.navButton} onClick={prevInProgress} aria-label="Previous in progress image">
            ‹
          </button>
          <img 
            src={encodeImagePath(inProgressImages[currentInProgressIndex])} 
            alt={`In Progress ${currentInProgressIndex + 1}`}
            className={styles.carouselImage}
            onError={(e) => {
              console.error('Failed to load in progress image:', inProgressImages[currentInProgressIndex]);
              (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x300/cccccc/666666?text=In+Progress+Image';
            }}
          />
          <button className={styles.navButton} onClick={nextInProgress} aria-label="Next in progress image">
            ›
          </button>
        </div>
        <div className={styles.imageCounter}>
          {currentInProgressIndex + 1} / {inProgressImages.length}
        </div>
      </div>

      <div className={styles.carouselSection}>
        <h4 className={styles.carouselTitle}>After</h4>
        <div className={styles.imageWrapper}>
          {afterImages[currentAfterIndex] === 'coming-soon' ? (
            <div className={styles.comingSoon}>
              <span className={styles.comingSoonText}>Coming Soon</span>
            </div>
          ) : (
            <>
              <button className={styles.navButton} onClick={prevAfter} aria-label="Previous after image">
                ‹
              </button>
              <img 
                src={encodeImagePath(afterImages[currentAfterIndex])} 
                alt={`After ${currentAfterIndex + 1}`}
                className={styles.carouselImage}
                onError={(e) => {
                  console.error('Failed to load after image:', afterImages[currentAfterIndex]);
                  (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x300/cccccc/666666?text=After+Image';
                }}
              />
              <button className={styles.navButton} onClick={nextAfter} aria-label="Next after image">
                ›
              </button>
            </>
          )}
        </div>
        {afterImages[currentAfterIndex] !== 'coming-soon' && (
          <div className={styles.imageCounter}>
            {currentAfterIndex + 1} / {afterImages.length}
          </div>
        )}
      </div>
    </div>
  );
}

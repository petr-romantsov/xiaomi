import clsx from 'clsx';
import { motion } from 'motion/react';

import { Text, VideoContainer } from '@/shared/components';

import styles from './FiltersSlide.module.scss';

export const FiltersSlide = ({
  video,
  videoDescription,
  image,
  imageAlt,
  className,
  isSlideChanging,
  onSlideChangingComplete,
}) => {
  const handleAnimationComplete = () => {
    if (isSlideChanging) {
      onSlideChangingComplete();
    }
  };

  return (
    <div className={clsx(styles.filtersSlide, className)}>
      <motion.div
        initial={{ scaleX: 0, transformOrigin: 'right' }}
        animate={{ scaleX: isSlideChanging ? 0 : 1, transformOrigin: 'left' }}
        transition={{ duration: 0.4 }}
        className={styles.filtersSlide__leftBlock}
      >
        <VideoContainer
          className={styles.filtersSlide__video}
          video={video}
          videoOptions={{ controlled: true }}
        />
        <Text className={styles.filtersSlide__videoDescription}>
          {videoDescription}
        </Text>
      </motion.div>
      <motion.div
        initial={{ scaleX: 0, transformOrigin: 'right' }}
        animate={{ scaleX: isSlideChanging ? 0 : 1, transformOrigin: 'left' }}
        transition={{ duration: 0.4 }}
        onAnimationComplete={handleAnimationComplete}
        className={styles.filtersSlide__image}
      >
        <img src={image} alt={imageAlt} />
      </motion.div>
    </div>
  );
};

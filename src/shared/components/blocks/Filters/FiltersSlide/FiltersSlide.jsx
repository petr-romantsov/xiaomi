import clsx from 'clsx';
import { motion } from 'motion/react';

import {
  ButtonNext,
  SlidesCounter,
  Text,
  VideoContainer,
} from '@/shared/components';

import styles from './FiltersSlide.module.scss';

export const FiltersSlide = ({
  video,
  videoDescription,
  image,
  imageAlt,
  className,
  currentSlideNumber,
  slidesTotalCount,
  onNextSlide,
}) => {
  return (
    <div className={clsx(styles.filtersSlide, className)}>
      <motion.div
        initial={{ scaleX: 1 }}
        exit={{ scaleX: 0 }}
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
      <div className={styles.filtersSlide__rightBlock}>
        <motion.div
          initial={{ scaleX: 1 }}
          exit={{ scaleX: 0 }}
          className={styles.filtersSlide__image}
        >
          <img src={image} alt={imageAlt} />
        </motion.div>
        <div className={styles.filtersSlide__slideControls}>
          <SlidesCounter
            currentSlide={currentSlideNumber}
            totalSlides={slidesTotalCount}
          />
          <ButtonNext onClick={onNextSlide}>Следующий фильтр</ButtonNext>
        </div>
      </div>
    </div>
  );
};

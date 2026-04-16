import clsx from 'clsx';
import { motion } from 'motion/react';

import { filtersPoster } from '@/assets/images';
import { Text, VideoContainer } from '@/shared/components';
import { IMAGE_VARIANTS, SLIDER_DELAYS } from '@/shared/constants';

import styles from './FiltersSlide.module.scss';

export const FiltersSlide = ({
  video,
  videoDescription,
  image,
  imageAlt,
  className,
}) => {
  return (
    <div className={clsx(styles.filtersSlide, className)}>
      <div className={styles.filtersSlide__leftBlock}>
        <motion.div
          variants={IMAGE_VARIANTS}
          custom={SLIDER_DELAYS.FIRST_IMAGE_DELAY}
          initial="enter"
          animate="center"
          exit="exit"
        >
          <VideoContainer
            className={styles.filtersSlide__video}
            video={video}
            poster={filtersPoster}
            videoOptions={{ controlled: true }}
          />
        </motion.div>
        <Text className={styles.filtersSlide__videoDescription}>
          {videoDescription}
        </Text>
      </div>
      <div className={styles.filtersSlide__image}>
        <motion.img
          variants={IMAGE_VARIANTS}
          custom={SLIDER_DELAYS.SECOND_IMAGE_DELAY}
          initial="enter"
          animate="center"
          exit="exit"
          src={image}
          alt={imageAlt}
        />
      </div>
    </div>
  );
};

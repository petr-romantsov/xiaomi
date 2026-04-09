import clsx from 'clsx';

import { CollapseX, Text, VideoContainer } from '@/shared/components';

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

  const animateOptions = {
    initial: { scaleX: 0, transformOrigin: 'right' },
    animate: { scaleX: isSlideChanging ? 0 : 1, transformOrigin: 'left' },
    transition: { duration: 0.4 },
  };

  return (
    <div className={clsx(styles.filtersSlide, className)}>
      <CollapseX {...animateOptions} className={styles.filtersSlide__leftBlock}>
        <VideoContainer
          className={styles.filtersSlide__video}
          video={video}
          videoOptions={{ controlled: true }}
        />
        <Text className={styles.filtersSlide__videoDescription}>
          {videoDescription}
        </Text>
      </CollapseX>
      <CollapseX
        {...animateOptions}
        onAnimationComplete={handleAnimationComplete}
        className={styles.filtersSlide__image}
      >
        <img src={image} alt={imageAlt} />
      </CollapseX>
    </div>
  );
};

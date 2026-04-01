import clsx from 'clsx';

import { ButtonNext, SlidesCounter } from '@/shared/components';

import styles from './SliderControls.module.scss';

export const SliderControls = ({
  withCounter,
  currentSlideNumber,
  slidesTotalCount,
  onNextSlide,
  nextButtonText,
  className,
}) => {
  return (
    <div className={clsx(styles.sliderControls, className)}>
      <div className={styles.sliderControls__inner}>
        {withCounter && (
          <SlidesCounter
            currentSlide={currentSlideNumber}
            totalSlides={slidesTotalCount}
          />
        )}
        <ButtonNext onClick={onNextSlide}>{nextButtonText}</ButtonNext>
      </div>
    </div>
  );
};

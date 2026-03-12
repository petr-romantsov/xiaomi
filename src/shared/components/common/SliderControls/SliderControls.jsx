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
      {withCounter && (
        <SlidesCounter
          currentSlide={currentSlideNumber}
          totalSlides={slidesTotalCount}
        />
      )}
      <ButtonNext onClick={onNextSlide}>{nextButtonText}</ButtonNext>
    </div>
  );
};

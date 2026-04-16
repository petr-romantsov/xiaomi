import clsx from 'clsx';

import { ButtonNext, SlidesCounter } from '@/shared/components';

import styles from './SliderControls.module.scss';

export const SliderControls = ({
  withCounter,
  currentSlideNumber,
  slidesTotalCount,
  onNextSlide,
  nextButtonText,
  bigGap,
  className,
}) => {
  return (
    <div className={clsx(styles.sliderControls, className)}>
      <div
        className={clsx(styles.sliderControls__inner, {
          [styles.sliderControls__inner_bigGap]: bigGap,
        })}
      >
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

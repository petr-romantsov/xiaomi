import { Children, useState } from 'react';

import clsx from 'clsx';
import { AnimatePresence } from 'motion/react';

import styles from './Slider.module.scss';

export const Slider = ({ children, activeIndex, className }) => {
  const slides = Children.toArray(children);

  return (
    <div className={clsx(styles.slider, className)}>
      <AnimatePresence initial={false} mode="wait">
        <div className={styles.slider__slide} key={activeIndex}>
          {slides[activeIndex]}
        </div>
      </AnimatePresence>
    </div>
  );
};

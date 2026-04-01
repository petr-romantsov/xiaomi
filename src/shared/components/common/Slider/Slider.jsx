import { Children, useState } from 'react';

import clsx from 'clsx';
import { AnimatePresence, easeInOut, motion } from 'motion/react';

import styles from './Slider.module.scss';

const transition = {
  duration: 0.4,
  ease: easeInOut,
};

const sliderVariants = {
  enter: {
    x: 300,
    // opacity: 0,
    transition: {
      ...transition,
      when: 'beforeChildren',
    },
  },
  center: {
    x: 0,
    // opacity: 1,
  },
  exit: {
    x: -300,
    // opacity: 0,
    transition: {
      ...transition,
      when: 'afterChildren',
    },
  },
};

export const Slider = ({ children, activeIndex, className }) => {
  const [prevIndex, setPrevIndex] = useState(activeIndex);
  const slides = Children.toArray(children);

  if (activeIndex !== prevIndex) {
    setPrevIndex(activeIndex);
  }

  return (
    <div className={clsx(styles.slider, className)}>
      <AnimatePresence initial={false}>
        <motion.div
          className={styles.slider__slide}
          key={activeIndex}
          variants={sliderVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            duration: 0.4,
            ease: 'easeInOut',
          }}
        >
          {slides[activeIndex]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

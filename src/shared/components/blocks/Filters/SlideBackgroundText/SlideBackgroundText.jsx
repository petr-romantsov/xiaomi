import { useEffect, useRef } from 'react';

import { clsx } from 'clsx';
import { useAnimate } from 'motion/react';

import { getItemKey } from '@/shared/helpers';

import styles from './SlideBackgroundText.module.scss';

const FLICKER_KEYFRAMES = [
  1, 0.15, 1, 0.3, 1, 0.05, 1, 0.4, 1, 0.2, 1, 0.1, 1, 0.35, 1, 0.25, 1,
];
const getAnimationDuration = (index) => 3 + (index % 3) * 0.35;
const getAnimationDelay = (index) => (index % 3) * 0.35;

export const SlideBackgroundText = ({
  text,
  backImg,
  activeSlide,
  className,
}) => {
  const splitedText = text.split('');
  const prevSlideIndexRef = useRef(null);

  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (!scope.current) return;

    if (prevSlideIndexRef.current === null) {
      prevSlideIndexRef.current = activeSlide;
      return;
    }

    if (prevSlideIndexRef.current === activeSlide) return;

    splitedText.forEach((_, index) => {
      animate(
        `.letter-${index}`,
        { opacity: [0, ...FLICKER_KEYFRAMES] },
        {
          duration: getAnimationDuration(index),
          delay: getAnimationDelay(index),
          times: FLICKER_KEYFRAMES.map(
            (_, i) => i / (FLICKER_KEYFRAMES.length - 1)
          ),
        }
      );
    });
    prevSlideIndexRef.current = activeSlide;
  }, [activeSlide, animate, scope, splitedText]);

  return (
    <div className={clsx(styles.slideBackgroundText, className)} ref={scope}>
      {!!splitedText.length &&
        splitedText.map((letter, index) => (
          <span
            key={getItemKey(letter, index)}
            className={clsx(
              styles.slideBackgroundText__letter,
              'letter',
              `letter-${index}`
            )}
            style={{ backgroundImage: `url(${backImg})` }}
          >
            {letter}
          </span>
        ))}
    </div>
  );
};

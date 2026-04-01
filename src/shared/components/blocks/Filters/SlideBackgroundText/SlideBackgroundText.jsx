import { clsx } from 'clsx';
import { motion } from 'motion/react';

import { getItemKey } from '@/shared/helpers';

import styles from './SlideBackgroundText.module.scss';

const FLICKER_KEYFRAMES = [
  1, 0.15, 1, 0.3, 1, 0.05, 1, 0.4, 1, 0.2, 1, 0.1, 1, 0.35, 1, 0.25, 1,
];
const getAnimationDuration = (index) => 3 + (index % 3) * 0.35;
const getAnimationDelay = (index) => (index % 3) * 0.35;

export const SlideBackgroundText = ({ text, backImg, className }) => {
  const splitedText = text.split('');

  return (
    <div className={clsx(styles.slideBackgroundText, className)}>
      {!!splitedText.length &&
        splitedText.map((letter, index) => (
          <motion.span
            initial={{ opacity: 1 }}
            animate={{ opacity: [0, ...FLICKER_KEYFRAMES] }}
            transition={{
              duration: getAnimationDuration(index),
              delay: getAnimationDelay(index),
              times: FLICKER_KEYFRAMES.map(
                (_, i) => i / (FLICKER_KEYFRAMES.length - 1)
              ),
            }}
            key={getItemKey(letter, index)}
            className={styles.slideBackgroundText__letter}
            style={{ backgroundImage: `url(${backImg})` }}
          >
            {letter}
          </motion.span>
        ))}
    </div>
  );
};

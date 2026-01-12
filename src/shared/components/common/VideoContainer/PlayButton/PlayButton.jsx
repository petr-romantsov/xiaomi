import clsx from 'clsx';

import { PlayIcon } from '@/assets/images';

import styles from './PlayButton.module.scss';

export const PlayButton = ({ onClick, className }) => {
  return (
    <button
      type="button"
      className={clsx(styles.playButton, {
        [className]: className,
      })}
      onClick={onClick}
    >
      <PlayIcon />
    </button>
  );
};

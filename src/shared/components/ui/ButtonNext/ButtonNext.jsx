import clsx from 'clsx';

import { ArrowRightIcon } from '@/assets/images';

import styles from './ButtonNext.module.scss';

export const ButtonNext = ({ children, className, onClick }) => {
  return (
    <button className={clsx(styles.buttonNext, className)} onClick={onClick}>
      {children}
      <ArrowRightIcon />
    </button>
  );
};

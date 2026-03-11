import clsx from 'clsx';

import styles from './Text.module.scss';

export function Text({ children, size, color = 'white', className = '' }) {
  return (
    <p
      className={clsx(
        styles.text,
        {
          [styles.text_size_sm]: size === 'sm',
          [styles.text_size_lg]: size === 'lg',
          [styles.text_color_pink]: color === 'pink',
          [styles.text_color_white]: color === 'white',
        },
        className
      )}
    >
      {children}
    </p>
  );
}

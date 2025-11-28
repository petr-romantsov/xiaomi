import clsx from 'clsx';
import styles from './Text.module.scss';

export function Text({ children, size, color }) {
  return (
    <p
      className={clsx(
        styles.text,
        size && styles[`text_size_${size}`],
        color && styles[`text_color_${color}`]
      )}
    >
      {children}
    </p>
  );
}

import { clsx } from 'clsx';
import styles from './SectionTitle.module.scss';

export function SectionTitle({ children, color }) {
  return (
    <h3
      className={clsx(
        styles.section__title,
        color && styles[`section__title--${color}`]
      )}
    >
      {children}
    </h3>
  );
}

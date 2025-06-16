import styles from './SectionTitle.module.css';
import { clsx } from 'clsx';

export const SectionTitle = ({ children, color }) => {
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
};

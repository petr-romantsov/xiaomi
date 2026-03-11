import clsx from 'clsx';

import styles from './ButtonTab.module.scss';

export const ButtonTab = ({ children, onClick, isActive, type = 'button' }) => {
  return (
    <button
      className={clsx(styles.buttonTab, {
        [styles.buttonTab_active]: isActive,
      })}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

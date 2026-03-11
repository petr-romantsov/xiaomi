import clsx from 'clsx';

import styles from './ButtonLink.module.scss';

export const ButtonLink = ({ link, children, className }) => {
  return (
    <a href={link} className={clsx(styles.buttonLink, className)}>
      {children}
    </a>
  );
};

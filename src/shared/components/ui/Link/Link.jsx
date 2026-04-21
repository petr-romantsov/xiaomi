import clsx from 'clsx';

import styles from './Link.module.scss';

export const Link = ({ children, className, href, ...props }) => {
  return (
    <a className={clsx(styles.link, className)} href={href} {...props}>
      {children}
    </a>
  );
};

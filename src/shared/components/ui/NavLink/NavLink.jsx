import clsx from 'clsx';

import styles from './NavLink.module.scss';

export function NavLink({ children, link, size = 'md', className = '' }) {
  return (
    <a
      className={clsx(
        styles.navLink,
        {
          [styles.navLink_size_md]: size === 'md',
          [styles.navLink_size_lg]: size === 'lg',
        },
        className
      )}
      href={link}
    >
      {children}
    </a>
  );
}

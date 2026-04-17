import clsx from 'clsx';

import styles from './NavLink.module.scss';

export function NavLink({
  children,
  link,
  size = 'md',
  color = 'white',
  className = '',
}) {
  return (
    <a
      className={clsx(
        styles.navLink,
        {
          [styles.navLink_size_md]: size === 'md',
          [styles.navLink_size_lg]: size === 'lg',
          [styles.navLink_color_white]: color === 'white',
          [styles.navLink_color_pink]: color === 'pink',
        },
        className
      )}
      href={link}
    >
      {children}
    </a>
  );
}

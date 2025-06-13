import styles from './NavLink.module.css';

export const NavLink = ({ children, link, size }) => {
  const linkClassName = `nav__link--${size}`;

  return (
    <li className={styles.nav__item}>
      <a className={linkClassName} href={link}>
        {children}
      </a>
    </li>
  );
};

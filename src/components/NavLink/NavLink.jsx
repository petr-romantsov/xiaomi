import styles from './NavLink.module.css';

export const NavLink = ({ children, link }) => {
  return (
    <li className={styles.nav__item}>
      <a href={link}>{children}</a>
    </li>
  );
};

import styles from './NavLink.module.css';

function NavLink({ children, link, size }) {
  const linkClassName = styles[`nav__link--${size}`];

  return (
    <li className={styles.nav__item}>
      <a className={linkClassName} href={link}>
        {children}
      </a>
    </li>
  );
}

export default NavLink;

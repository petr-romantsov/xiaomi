import styles from './NavLink.module.scss';

export function NavLink({ children, link, size }) {
  const linkClassName = styles[`nav__link--${size}`];

  return (
    <a className={linkClassName} href={link}>
      {children}
    </a>
  );
}

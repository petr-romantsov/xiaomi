import NavLink from '../NavLink/NavLink';
import styles from './NavList.module.scss';

export function NavList() {
  return (
    <ul className={styles.nav__list}>
      <NavLink link="#conception" size="sm">
        О КОЛЛАБОРАЦИИ
      </NavLink>
      <NavLink link="#series" size="sm">
        серия Mi 10T
      </NavLink>
      <NavLink link="#wherebuy" size="sm">
        ГДЕ КУПИТЬ
      </NavLink>
    </ul>
  );
}

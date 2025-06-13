import { NavLink } from '../navLink/navLink';
import styles from './NavList.module.css';

export const NavList = () => {
  return (
    <ul className={styles.nav__list}>
      <NavLink link={'#conception'} size={'sm'}>
        О КОЛЛАБОРАЦИИ
      </NavLink>
      <NavLink link={'#series'} size={'sm'}>
        серия Mi 10T
      </NavLink>
      <NavLink link={'#wherebuy'} size={'sm'}>
        ГДЕ КУПИТЬ
      </NavLink>
    </ul>
  );
};

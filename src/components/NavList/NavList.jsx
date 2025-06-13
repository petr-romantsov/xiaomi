import { NavLink } from '../navLink/navLink';

export const NavList = () => {
  return (
    <ul>
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

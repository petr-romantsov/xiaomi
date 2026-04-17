import { NavLink, XiaomiLogo } from '@/shared/components/';
import { navItems } from '@/shared/constants';

import styles from './Header.module.scss';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <ul className={styles.header__list}>
          {navItems.map((item) => {
            return (
              <li key={item.text}>
                <NavLink
                  className={styles.header__link}
                  link={item.link}
                  color="white"
                >
                  {item.text}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <XiaomiLogo />
      </div>
    </header>
  );
}

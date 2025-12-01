import { NavLink } from '@/shared/components/ui/NavLink/NavLink';
import styles from './NavList.module.scss';

export function NavList({ items }) {
  return (
    <ul>
      {items.map((item) => {
        return (
          <li key={item.text} className={styles.nav__item}>
            <NavLink link={item.link} size={item.size}>
              {item.text}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}

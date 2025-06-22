import { NavList } from '../NavList/NavList';
import { XiaomiLogo } from '../XiaomiLogo/XiaomiLogo';
import styles from './Header.module.scss';

export function Header() {
  return (
    <header className={styles.header}>
      <NavList />
      <XiaomiLogo />
    </header>
  );
}

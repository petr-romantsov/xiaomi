import { NavList } from '../../ui/NavList/NavList';
import { XiaomiLogo } from '../../XiaomiLogo/XiaomiLogo';
import styles from './Header.module.scss';
import navItems from '../../../constants/navItems';

export function Header() {
  return (
    <header className={styles.header}>
      <NavList items={navItems} />
      <XiaomiLogo />
    </header>
  );
}

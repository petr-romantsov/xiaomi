import { NavList } from '@/shared/components/ui/NavList/NavList';
import { XiaomiLogo } from '@/shared/components/XiaomiLogo/XiaomiLogo';
import navItems from '@/shared/constants/navItems';
import styles from './Header.module.scss';

export function Header() {
  return (
    <header className={styles.header}>
      <NavList items={navItems} />
      <XiaomiLogo />
    </header>
  );
}

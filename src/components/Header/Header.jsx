import { NavList } from '../NavList/NavList';
import { XiaomiLogo } from '../XiaomiLogo/XiaomiLogo';
import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <NavList />
      <XiaomiLogo />
    </header>
  );
};

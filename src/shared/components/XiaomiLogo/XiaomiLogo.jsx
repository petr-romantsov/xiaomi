import miLogo from '../../../assets/images/MiLogo.png';
import miLogoText from '../../../assets/images/XiaomiText.png';

import styles from './XiaomiLogo.module.scss';

export function XiaomiLogo() {
  return (
    <a href="#">
      <figure className={styles.logo}>
        <img src={miLogo} alt="Логотип Xiaomi" />
        <img src={miLogoText} alt="Xiaomi" />
      </figure>
    </a>
  );
}

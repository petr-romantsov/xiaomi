import miLogo from '../../images/MiLogo.png';
import miLogoText from '../../images/XiaomiText.png';
import styles from './XiaomiLogo.module.css';

export const XiaomiLogo = () => {
  return (
    <a href="https://www.mi.com/ru/" target="_blank" rel="noopener noreferrer">
      <figure className={styles.logo}>
        <img src={miLogo} alt="Логотип Xiaomi" />
        <img src={miLogoText} alt="Xiaomi" />
      </figure>
    </a>
  );
};

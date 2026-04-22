import { verticalImg, verticalImg2 } from '@/assets/images';

import styles from './VerticalText.module.scss';

export const VerticalText = () => {
  return (
    <div className={styles.verticalText}>
      <div className={styles.verticalText__container}>
        <div className={styles.verticalText__imageWrapper}>
          <img
            className={styles.image_first}
            src={verticalImg}
            alt="Xiaomi x Aytlo"
          />
          <img
            className={styles.image_first}
            src={verticalImg}
            alt="Xiaomi x Aytlo"
          />
          <img
            className={styles.image_second}
            src={verticalImg2}
            alt="Xiaomi x Aytlo"
          />
        </div>
        <div className={styles.verticalText__imageWrapper}>
          <img
            className={styles.image_first}
            src={verticalImg}
            alt="Xiaomi x Aytlo"
          />
          <img
            className={styles.image_second}
            src={verticalImg2}
            alt="Xiaomi x Aytlo"
          />
          <img
            className={styles.image_second}
            src={verticalImg2}
            alt="Xiaomi x Aytlo"
          />
        </div>
      </div>
    </div>
  );
};

import clsx from 'clsx';

import { aytlo, modelImg, phone } from '@/assets/images';
import { ContentDisclaimer, Link, Text } from '@/shared/components';
import { texts } from '@/shared/constants';

import styles from './Hero.module.scss';

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__content}>
        <div className={styles.hero__model}>
          <img className={styles.hero__modelImg} src={modelImg} alt="Mi 10T" />
        </div>
        <div className={clsx(styles.hero__text, styles.hero__text_first)}>
          <Text size="sm">{texts.HERO_FIRST_PARAGRAPH}</Text>
          <Text size="sm">{texts.HERO_SECOND_PARAGRAPH}</Text>
        </div>
        <div className={styles.hero__phone}>
          <img
            className={styles.hero__phoneImg}
            src={phone}
            alt="Изображение телефона Mi 10T"
          />
        </div>
        <Link className={styles.hero__link} link="#" color="pink">
          ПОДРОБНЕЕ О СЕРИИ Mi 10T
        </Link>
        <div className={styles.hero__text}>
          <img
            className={styles.hero__aytlo}
            src={aytlo}
            alt="АУТЛО Creative"
          />
          <Text size="sm">{texts.HERO_THIRD_PARAGRAPH}</Text>
          <Text size="sm">{texts.HERO_FOURTH_PARAGRAPH}</Text>
        </div>
        <ContentDisclaimer className={styles.hero__contentDisclaimer} />
      </div>
    </section>
  );
};

import { mainTitle, mainTitleMob } from '@/assets/images';
import { HeaderBgVideo } from '@/assets/videos';
import { Text, VideoContainer } from '@/shared/components';

import styles from './FirstBlock.module.scss';

export const FirstBlock = () => {
  return (
    <section className={styles.firstBlock}>
      <VideoContainer
        className={styles.firstBlock__video}
        video={HeaderBgVideo}
        videoOptions={{
          isAutoPlay: true,
          isMuted: true,
          isLoop: true,
        }}
      />
      <div className={styles.firstBlock__content}>
        <h1 className={styles.firstBlock__title}>Xiaomi x Aytlo Creative</h1>
        <picture>
          <source
            srcSet={mainTitleMob}
            type="image/png"
            media="(max-width: 767px)"
          />
          <img
            className={styles.firstBlock__img}
            src={mainTitle}
            alt="Xiaomi x AYTLO"
          />
        </picture>
        <Text className={styles.firstBlock__description}>
          Капсульная коллекция, вдохновленная Mi&nbsp;10T series
        </Text>
      </div>
    </section>
  );
};

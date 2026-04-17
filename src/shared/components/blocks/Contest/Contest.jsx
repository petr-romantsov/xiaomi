import { contestPoster } from '@/assets/images';
import { filtersVideo } from '@/assets/videos';
import { NavLink, Text, VideoContainer } from '@/shared/components';

import styles from './Contest.module.scss';

export const Contest = () => {
  return (
    <section className={styles.contest}>
      <div className={styles.contest__videoWrapper}>
        <VideoContainer
          video={filtersVideo}
          poster={contestPoster}
          videoOptions={{ controlled: true }}
          className={styles.contest__video}
        />
        <p className={styles.contest__descr}>
          <span>
            ВЫИГРАЙ СМАРТФОН Mi&nbsp;10T&nbsp;PRO <br /> И&nbsp;СЕТ-КОЛЛЕКЦИЮ
            XIAOMI&nbsp;И&nbsp;AYT&Lambda;&Omicron;&nbsp;CREATIVE
          </span>
        </p>
      </div>
      <div className={styles.contest__conditions}>
        <Text>
          Все просто: <br />
          1) Выложите фото/видeo с&nbsp;маской в&nbsp;сториз или ленту
          Запретограм
        </Text>
        <Text>2) Отметьте и&nbsp;подпишитесь на @xiaomi.russia</Text>
        <Text>
          Уже 15&nbsp;декабря мы&nbsp;выберем и&nbsp;наградим трех победителей
          среди всех участников!
        </Text>
        <NavLink link="#" className={styles.contest__link}>
          ПОДРОБНЕЕ
        </NavLink>
      </div>
    </section>
  );
};

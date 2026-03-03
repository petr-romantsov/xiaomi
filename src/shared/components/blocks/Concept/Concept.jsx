import { letterA } from '@/assets/images';
import { ConceptVideo } from '@/assets/videos';
import { SectionTitle, Text, VideoContainer } from '@/shared/components';
import { texts } from '@/shared/constants';

import styles from './Concept.module.scss';

export const Concept = () => {
  return (
    <section className={styles.concept}>
      <div className={styles.concept__content}>
        <div className={styles.concept__descr}>
          <SectionTitle className={styles.concept__title} color="pink">
            КОНЦЕПЦИЯ
          </SectionTitle>
          <Text className={styles.concept__text}>
            {texts.CONCEPT_FIRST_PARAGRAPH}
          </Text>
          <Text className={styles.concept__text}>
            {texts.CONCEPT_SECOND_PARAGRAPH}
          </Text>
        </div>
        <div className={styles.concept__letterA}>
          <img src={letterA} alt="letter A" />
        </div>
        <VideoContainer
          video={ConceptVideo}
          videoOptions={{
            controlled: true,
            smallPlayBtn: true,
          }}
          className={styles.concept__video}
        />
      </div>
    </section>
  );
};

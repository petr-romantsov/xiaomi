import { videoBlockPoster } from '@/assets/images';
import { videoBlockVideo } from '@/assets/videos';
import { useMediaQuery } from '@/hooks';
import { ContentDisclaimer, VideoContainer } from '@/shared/components';

import styles from './VideoBlock.module.scss';

export const VideoBlock = () => {
  const isMobile = useMediaQuery('(max-width: 767px)');
  return (
    <section className={styles.videoBlock}>
      {!isMobile && (
        <ContentDisclaimer className={styles.videoBlock__contentDisclaimer} />
      )}
      <VideoContainer
        video={videoBlockVideo}
        poster={videoBlockPoster}
        videoOptions={{
          controlled: true,
        }}
        className={styles.videoBlock__video}
      />
    </section>
  );
};

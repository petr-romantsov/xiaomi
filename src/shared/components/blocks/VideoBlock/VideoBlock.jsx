import { videoBlockPoster } from '@/assets/images';
import { videoBlockVideo } from '@/assets/videos';
import { VideoContainer } from '@/shared/components';

import styles from './VideoBlock.module.scss';

export const VideoBlock = () => {
  return (
    <section className={styles.videoBlock}>
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

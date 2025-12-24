import clsx from 'clsx';

import { PlayIcon } from '@/assets/images';

import styles from './VideoContainer.module.scss';

export const VideoContainer = ({ video, videoOptions = {}, className }) => {
  return (
    <div className={clsx(styles.videoContainer, className)}>
      <video
        autoPlay={videoOptions.isAutoPlay}
        className={styles.videoContainer__video}
        muted={videoOptions.isMuted}
        loop={videoOptions.isLoop}
      >
        <source src={video} type="video/mp4" />
        <track kind="captions" />
      </video>
      {videoOptions.controlled && (
        <button type="button" className={styles.videoContainer__play}>
          <PlayIcon />
        </button>
      )}
    </div>
  );
};

import clsx from 'clsx';

import { PlayIcon } from '@/assets/images/icons';

import styles from './VideoContainer.module.scss';

export const VideoContainer = ({ video, videoOptions = {}, className }) => {
  const containerStyle = {
    '--container-width':
      typeof videoOptions.width === 'number'
        ? `${videoOptions.width}px`
        : videoOptions.width,
    '--container-height':
      typeof videoOptions.height === 'number'
        ? `${videoOptions.height}px`
        : videoOptions.height,
  };

  return (
    <div
      className={clsx(styles.videoContainer, className)}
      style={containerStyle}
    >
      <video
        autoPlay={videoOptions.isAutoPlay}
        className={styles.video}
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

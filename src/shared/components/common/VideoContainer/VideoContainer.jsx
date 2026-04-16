import { useRef, useState } from 'react';

import clsx from 'clsx';

import { PlayButton } from './PlayButton/PlayButton';

import styles from './VideoContainer.module.scss';

export const VideoContainer = ({
  video,
  poster,
  videoOptions = {},
  className,
}) => {
  const [isPlayBtnVisible, setIsPlayBtnVisible] = useState(true);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const videoRef = useRef(null);
  const isAutoPlay = videoOptions.isAutoPlay || false;

  const handlePlayButtonClick = () => {
    const videoEl = videoRef.current;
    if (!videoEl) return;

    videoEl.paused ? videoEl.play() : videoEl.pause();
  };

  const handleCanPlay = () => setIsVideoReady(true);

  const onPlay = () => setIsPlayBtnVisible(false);
  const onPause = () => setIsPlayBtnVisible(true);
  const onEnded = () => setIsPlayBtnVisible(true);

  return (
    <div className={clsx(styles.videoContainer, className)}>
      {isAutoPlay && (
        <img
          src={poster}
          alt=""
          className={styles.videoContainer__poster}
          style={{
            opacity: isVideoReady ? 0 : 1,
            transition: 'opacity 0.3s ease-in-out',
          }}
        />
      )}
      <video
        className={styles.videoContainer__video}
        ref={videoRef}
        poster={poster}
        playsInline
        autoPlay={videoOptions.isAutoPlay}
        muted={videoOptions.isMuted}
        loop={videoOptions.isLoop}
        onPlay={onPlay}
        onPause={onPause}
        onEnded={onEnded}
        onCanPlay={handleCanPlay}
      >
        <source src={video} type="video/mp4" />
        <track kind="captions" />
      </video>
      {!!videoOptions.controlled && (
        <PlayButton
          className={clsx(styles.videoContainer__play, {
            [styles.videoContainer__play_visible]: isPlayBtnVisible,
            [styles.videoContainer__play_size_sm]: videoOptions.smallPlayBtn,
          })}
          onClick={handlePlayButtonClick}
        />
      )}
    </div>
  );
};

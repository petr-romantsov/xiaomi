import { useRef, useState } from 'react';

import clsx from 'clsx';

import { PlayButton } from './PlayButton/PlayButton';

import styles from './VideoContainer.module.scss';

export const VideoContainer = ({ video, videoOptions = {}, className }) => {
  const [isPlayBtnVisible, setIsPlayBtnVisible] = useState(true);
  const videoRef = useRef(null);

  const handlePlayButtonClick = () => {
    const videoEl = videoRef.current;
    if (!videoEl) return;

    videoEl.paused ? videoEl.play() : videoEl.pause();
  };

  const onPlay = () => setIsPlayBtnVisible(false);
  const onPause = () => setIsPlayBtnVisible(true);
  const onEnded = () => setIsPlayBtnVisible(true);

  return (
    <div className={clsx(styles.videoContainer, className)}>
      <video
        ref={videoRef}
        autoPlay={videoOptions.isAutoPlay}
        className={styles.videoContainer__video}
        muted={videoOptions.isMuted}
        loop={videoOptions.isLoop}
        onPlay={onPlay}
        onPause={onPause}
        onEnded={onEnded}
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

import { useRef, useState } from 'react';

import clsx from 'clsx';

import { PlayButton } from './PlayButton/PlayButton';

import styles from './VideoContainer.module.scss';

export const VideoContainer = ({ video, videoOptions = {}, className }) => {
  const [isVideoPaused, setIsVideoPaused] = useState(false);
  const videoRef = useRef(null);

  const handlePlayButtonClick = () => {
    if (videoRef.current && videoRef.current.paused) {
      videoRef.current.play();
      setIsVideoPaused(false);
    } else {
      videoRef.current.pause();
      setIsVideoPaused(true);
    }
  };
  return (
    <div className={clsx(styles.videoContainer, className)}>
      <video
        ref={videoRef}
        autoPlay={videoOptions.isAutoPlay}
        className={styles.videoContainer__video}
        muted={videoOptions.isMuted}
        loop={videoOptions.isLoop}
      >
        <source src={video} type="video/mp4" />
        <track kind="captions" />
      </video>
      {!!videoOptions.controlled && (
        <PlayButton
          className={clsx(styles.videoContainer__play, {
            [styles.videoContainer__play_visible]: isVideoPaused,
          })}
          onClick={handlePlayButtonClick}
        />
      )}
    </div>
  );
};

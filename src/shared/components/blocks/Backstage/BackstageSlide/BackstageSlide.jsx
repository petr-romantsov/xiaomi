import clsx from 'clsx';

import { useMediaQuery } from '@/hooks';
import { CollapseX, VideoContainer } from '@/shared/components';

import styles from './BackstageSlide.module.scss';

export const BackstageSlide = ({
  className,
  content,
  isSlideChanging,
  reversed = false,
  onSlideChangingComplete,
}) => {
  const [leftContent, rightContent] = content;
  const isMobile = useMediaQuery('(max-width: 767px)');

  const handleAnimationComplete = () => {
    if (isSlideChanging) {
      onSlideChangingComplete();
    }
  };

  const animateOptions = {
    initial: { scaleX: 0, transformOrigin: 'right' },
    animate: { scaleX: isSlideChanging ? 0 : 1, transformOrigin: 'left' },
    transition: { duration: 0.4 },
  };

  return (
    <div
      className={clsx(styles.backstageSlide, className, {
        [styles.backstageSlide_reversed]: reversed,
      })}
    >
      <CollapseX
        {...animateOptions}
        className={styles.backstageSlide__left}
        onAnimationComplete={handleAnimationComplete}
      >
        {leftContent.type === 'video' ? (
          <VideoContainer
            video={leftContent.video}
            className={styles.backstageSlide__video}
            videoOptions={{ controlled: true }}
          />
        ) : (
          <img
            src={leftContent.image}
            alt="Photo from backstage."
            className={styles.backstageSlide__image}
          />
        )}
      </CollapseX>
      {!isMobile && (
        <CollapseX {...animateOptions} className={styles.backstageSlide__right}>
          {rightContent.type === 'video' ? (
            <VideoContainer
              video={rightContent.video}
              className={styles.backstageSlide__video}
              videoOptions={{ controlled: true }}
            />
          ) : (
            <img
              src={rightContent.image}
              alt="Photo from backstage."
              className={styles.backstageSlide__image}
            />
          )}
        </CollapseX>
      )}
    </div>
  );
};

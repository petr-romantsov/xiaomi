import clsx from 'clsx';
import { motion } from 'motion/react';

import { conceptPoster } from '@/assets/images';
import { useMediaQuery } from '@/hooks';
import { VideoContainer } from '@/shared/components';
import { IMAGE_VARIANTS, SLIDER_DELAYS } from '@/shared/constants';

import styles from './BackstageSlide.module.scss';

export const BackstageSlide = ({ className, content, reversed = false }) => {
  const [leftContent, rightContent] = content;
  const isMobile = useMediaQuery('(max-width: 767px)');

  return (
    <div
      className={clsx(styles.backstageSlide, className, {
        [styles.backstageSlide_reversed]: reversed,
      })}
    >
      <div className={styles.backstageSlide__left}>
        {leftContent.type === 'video' ? (
          <motion.div
            variants={IMAGE_VARIANTS}
            custom={SLIDER_DELAYS.FIRST_IMAGE_DELAY}
            initial="enter"
            animate="center"
            exit="exit"
          >
            <VideoContainer
              video={leftContent.video}
              poster={conceptPoster}
              className={styles.backstageSlide__video}
              videoOptions={{ controlled: true }}
            />
          </motion.div>
        ) : (
          <motion.img
            variants={IMAGE_VARIANTS}
            custom={SLIDER_DELAYS.FIRST_IMAGE_DELAY}
            initial="enter"
            animate="center"
            exit="exit"
            src={leftContent.image}
            alt="Photo from backstage."
            className={styles.backstageSlide__image}
          />
        )}
      </div>
      {!isMobile && (
        <div className={styles.backstageSlide__right}>
          {rightContent.type === 'video' ? (
            <motion.div
              variants={IMAGE_VARIANTS}
              custom={SLIDER_DELAYS.SECOND_IMAGE_DELAY}
              initial="enter"
              animate="center"
              exit="exit"
            >
              <VideoContainer
                video={rightContent.video}
                poster={conceptPoster}
                className={styles.backstageSlide__video}
                videoOptions={{ controlled: true }}
              />
            </motion.div>
          ) : (
            <motion.img
              variants={IMAGE_VARIANTS}
              custom={SLIDER_DELAYS.SECOND_IMAGE_DELAY}
              initial="enter"
              animate="center"
              exit="exit"
              src={rightContent.image}
              alt="Photo from backstage."
              className={styles.backstageSlide__image}
            />
          )}
        </div>
      )}
    </div>
  );
};

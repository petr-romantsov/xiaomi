import clsx from 'clsx';
import { motion } from 'motion/react';

import { IMAGE_VARIANTS } from '@/shared/constants';
import { getItemKey } from '@/shared/helpers';

import styles from './CollectionsSlide.module.scss';

const getImageDelay = (index) => index * 0.05;

export const CollectionsSlide = ({ collection }) => {
  return (
    <div
      className={clsx(styles.collectionsSlide, {
        [styles[`collectionsSlide_${collection.id}`]]: !!collection.id,
      })}
    >
      {collection.content.map((item, index) => (
        <div
          key={getItemKey(collection.title, index)}
          className={styles.collectionsSlide__imageWrapper}
        >
          <motion.img
            variants={IMAGE_VARIANTS}
            custom={getImageDelay(index)}
            initial="enter"
            animate="center"
            exit="exit"
            src={item.image}
            alt={`${collection.title} image`}
            className={styles.collectionsSlide__image}
          />
        </div>
      ))}
    </div>
  );
};

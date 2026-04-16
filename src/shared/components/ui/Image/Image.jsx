import clsx from 'clsx';

import styles from './Image.module.scss';

export const Image = ({ src, alt, className, ...props }) => {
  return (
    <div className={clsx(styles.imageWrapper, className)}>
      <img src={src} alt={alt} className={styles.image} {...props} />
    </div>
  );
};

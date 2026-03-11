import clsx from 'clsx';

import styles from './SocialLink.module.scss';

export const SocialLink = ({ link, children, className }) => {
  return (
    <a href={link} className={clsx(styles.socialLink, className)}>
      <i>{children}</i>
    </a>
  );
};

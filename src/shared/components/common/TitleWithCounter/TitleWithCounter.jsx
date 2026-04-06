import { useMediaQuery } from '@/hooks';
import { SectionTitle } from '@/shared/components';
import { MOBILE_QUERY } from '@/shared/constants';

import styles from './TitleWithCounter.module.scss';

const getSlidesCounter = (activeIndex, totalCount) => {
  return `0${activeIndex}/0${totalCount}`;
};

export const TitleWithCounter = ({ title, activeIndex, totalCount }) => {
  const isMobile = useMediaQuery(MOBILE_QUERY);
  return (
    <SectionTitle color="pink" className={styles.titleWithCounter}>
      {title}
      {isMobile && <span>{getSlidesCounter(activeIndex, totalCount)}</span>}
    </SectionTitle>
  );
};

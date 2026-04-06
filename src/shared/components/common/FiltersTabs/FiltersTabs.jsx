import clsx from 'clsx';

import { ButtonTab } from '@/shared/components';

import styles from './FiltersTabs.module.scss';

export const FiltersTabs = ({ tabs, activeIndex, onClick, className }) => {
  const handleClick = (index) => {
    onClick(index);
  };

  return (
    <ul className={clsx(styles.filters__tabs, className)}>
      {tabs.map((tab, index) => {
        return (
          <li key={tab}>
            <ButtonTab
              onClick={() => handleClick(index)}
              isActive={activeIndex === index}
            >
              {tab}
            </ButtonTab>
          </li>
        );
      })}
    </ul>
  );
};

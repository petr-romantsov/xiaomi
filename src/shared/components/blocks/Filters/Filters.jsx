import { useState } from 'react';

import {
  ButtonTab,
  FiltersSlide,
  SectionTitle,
  Slider,
} from '@/shared/components';
import { filtersData } from '@/shared/constants';

import styles from './Filters.module.scss';

const getCurrentSlideNumber = (index) => index + 1;

export const Filters = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const filtersTabs = filtersData.map((filter) => filter.title);

  const handleNextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % filtersData.length);
  };

  return (
    <section className={styles.filters}>
      {!!filtersData.length && (
        <>
          <div className={styles.filters__tabsWrapper}>
            <SectionTitle color="pink">ФИЛЬТРЫ</SectionTitle>

            <ul className={styles.filters__tabs}>
              {filtersTabs.map((filter, index) => {
                return (
                  <li key={filter}>
                    <ButtonTab
                      onClick={() => setActiveIndex(index)}
                      isActive={activeIndex === index}
                    >
                      {filter}
                    </ButtonTab>
                  </li>
                );
              })}
            </ul>
          </div>
          <Slider activeIndex={activeIndex}>
            {filtersData.map((slide, index) => (
              <FiltersSlide
                key={slide.title}
                currentSlideNumber={getCurrentSlideNumber(index)}
                slidesTotalCount={filtersData.length}
                onNextSlide={handleNextSlide}
                {...slide}
              />
            ))}
          </Slider>
        </>
      )}
    </section>
  );
};

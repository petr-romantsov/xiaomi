import { useCallback, useState } from 'react';

import {
  ButtonTab,
  FiltersSlide,
  SectionTitle,
  Slider,
  SliderControls,
} from '@/shared/components';
import { filtersData } from '@/shared/constants';

import styles from './Filters.module.scss';

const getCurrentSlideNumber = (index) => index + 1;

export const Filters = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isSlideChanging, setIsSlideChanging] = useState(false);
  const [nextSlideIndex, setNextSlideIndex] = useState(0);
  const filtersTabs = filtersData.map((filter) => filter.title);

  const handleNextSlide = useCallback(() => {
    setNextSlideIndex((activeIndex + 1) % filtersTabs.length);
    setIsSlideChanging(true);
  }, [activeIndex, filtersTabs]);

  const onSlideChangingComplete = useCallback(() => {
    setActiveIndex(nextSlideIndex);
    setIsSlideChanging(false);
  }, [nextSlideIndex]);

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
          <Slider
            activeIndex={activeIndex}
            onNextSlide={handleNextSlide}
            className={styles.filters__slider}
          >
            {filtersData.map((slide, index) => (
              <FiltersSlide
                key={slide.title}
                onNextSlide={handleNextSlide}
                isSlideChanging={isSlideChanging}
                onSlideChangingComplete={onSlideChangingComplete}
                {...slide}
              />
            ))}
          </Slider>
          <SliderControls
            withCounter
            currentSlideNumber={getCurrentSlideNumber(activeIndex)}
            slidesTotalCount={filtersData.length}
            onNextSlide={handleNextSlide}
            nextButtonText="Следующий слайд"
            className={styles.filters__sliderControls}
          />
        </>
      )}
    </section>
  );
};

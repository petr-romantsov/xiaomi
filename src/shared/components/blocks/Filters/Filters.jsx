import { useCallback, useState } from 'react';

import { useMediaQuery } from '@/hooks';
import {
  ButtonTab,
  FiltersSlide,
  SectionTitle,
  SlideBackgroundText,
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
  const isMobile = useMediaQuery('(max-width: 768px)');

  const filtersTabs = filtersData.map((filter) => filter.title);
  const textForBackground = filtersData[activeIndex].title;
  const backgroundImg = filtersData[activeIndex].backgroundImg;

  const handleNextSlide = useCallback(() => {
    setNextSlideIndex((activeIndex + 1) % filtersTabs.length);
    setIsSlideChanging(true);
  }, [activeIndex, filtersTabs]);

  const onSlideChangingComplete = useCallback(() => {
    setActiveIndex(nextSlideIndex);
    setIsSlideChanging(false);
  }, [nextSlideIndex]);

  const handleTabClick = (index) => {
    if (index === activeIndex) return;
    if (isSlideChanging) return;
    setNextSlideIndex(index);
    setIsSlideChanging(true);
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
                      onClick={() => handleTabClick(index)}
                      isActive={activeIndex === index}
                    >
                      {filter}
                    </ButtonTab>
                  </li>
                );
              })}
            </ul>
          </div>
          {!isMobile && (
            <SlideBackgroundText
              text={textForBackground}
              backImg={backgroundImg}
              activeSlide={activeIndex}
            />
          )}
          <Slider
            activeIndex={activeIndex}
            onNextSlide={handleNextSlide}
            className={styles.filters__slider}
          >
            {filtersData.map((slide) => (
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

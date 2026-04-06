import { useCallback, useState } from 'react';

import { useMediaQuery } from '@/hooks';
import {
  FiltersSlide,
  FiltersTabs,
  SlideBackgroundText,
  Slider,
  SliderControls,
  TitleWithCounter,
} from '@/shared/components';
import { filtersData } from '@/shared/constants';
import { getCurrentSlideNumber } from '@/shared/helpers';

import styles from './Filters.module.scss';

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
            <TitleWithCounter
              title="ФИЛЬТРЫ"
              activeIndex={getCurrentSlideNumber(activeIndex)}
              totalCount={filtersData.length}
            />

            <FiltersTabs
              tabs={filtersTabs}
              activeIndex={activeIndex}
              onClick={handleTabClick}
            />
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

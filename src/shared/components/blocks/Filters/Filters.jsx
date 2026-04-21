import { useCallback, useState } from 'react';

import { phoneImage } from '@/assets/images';
import { useMediaQuery } from '@/hooks';
import {
  ContentDisclaimer,
  FiltersSlide,
  FiltersTabs,
  Link,
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
  const isMobile = useMediaQuery('(max-width: 768px)');

  const currentSlideNumber = `0${getCurrentSlideNumber(activeIndex)}`;
  const totalSlidesCount = `0${filtersData.length}`;
  const filtersTabs = filtersData.map((filter) => filter.title);
  const textForBackground = filtersData[activeIndex].title;
  const backgroundImg = filtersData[activeIndex].backgroundImg;

  const handleNextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % filtersTabs.length);
  }, [filtersTabs.length]);

  const handleTabClick = (index) => {
    if (index === activeIndex) return;
    setActiveIndex(index);
  };

  return (
    <section className={styles.filters}>
      {!!filtersData.length && (
        <>
          {!isMobile && (
            <SlideBackgroundText
              text={textForBackground}
              backImg={backgroundImg}
              activeSlide={activeIndex}
            />
          )}
          <div className={styles.filters__container}>
            <ContentDisclaimer className={styles.filters__contentDisclaimer} />

            {!isMobile && (
              <div className={styles.filters__purchaseLinks}>
                <div className={styles.filters__purchaseImageWrapper}>
                  <img src={phoneImage} alt="Xiaomi Mi 10T" />
                </div>
                <Link href="#" className={styles.filters__purchaseLink}>
                  КУПИТЬ СЕРИЮ Mi&nbsp;10T
                </Link>
                <Link href="#" className={styles.filters__purchaseLink}>
                  КУПИТЬ ВЕЩИ ИЗ&nbsp;КОЛЛЕКЦИИ
                </Link>
              </div>
            )}

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
            <Slider
              activeIndex={activeIndex}
              className={styles.filters__slider}
            >
              {filtersData.map((slide) => (
                <FiltersSlide key={slide.title} {...slide} />
              ))}
            </Slider>
            <SliderControls
              withCounter
              currentSlideNumber={currentSlideNumber}
              slidesTotalCount={totalSlidesCount}
              onNextSlide={handleNextSlide}
              nextButtonText="Следующий слайд"
              className={styles.filters__sliderControls}
            />
          </div>
        </>
      )}
    </section>
  );
};

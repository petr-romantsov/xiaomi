import { useState } from 'react';

import {
  CollectionsSlide,
  FiltersTabs,
  Slider,
  SliderControls,
  Text,
  TitleWithCounter,
} from '@/shared/components';
import { collectionsData, texts } from '@/shared/constants';
import { getCurrentSlideNumber } from '@/shared/helpers';

import styles from './Collection.module.scss';

export const Collection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNextSlide = () => {
    setActiveIndex((activeIndex + 1) % collectionsData.length);
  };

  const handleTabClick = (index) => {
    setActiveIndex(index);
  };

  const currentSlideNumber = `0${getCurrentSlideNumber(activeIndex)}`;
  const totalSlidesCount = `0${collectionsData.length}`;

  const collectionsTabs = collectionsData.map((collection) => collection.title);

  return (
    <section className={styles.collections}>
      {!!collectionsData.length && (
        <>
          <div className={styles.collections__tabsWrapper}>
            <TitleWithCounter
              title="КОЛЛЕКЦИИ"
              activeIndex={getCurrentSlideNumber(activeIndex)}
              totalCount={collectionsData.length}
            />
            <FiltersTabs
              tabs={collectionsTabs}
              activeIndex={activeIndex}
              onClick={handleTabClick}
            />
          </div>
          <Slider
            activeIndex={activeIndex}
            className={styles.collections__slider}
          >
            {collectionsData.map((collection) => (
              <CollectionsSlide
                key={collection.title}
                collection={collection}
              />
            ))}
          </Slider>
          <SliderControls
            withCounter
            currentSlideNumber={currentSlideNumber}
            slidesTotalCount={totalSlidesCount}
            onNextSlide={handleNextSlide}
            nextButtonText="Следующий образ"
            bigGap
            className={styles.collections__sliderControls}
          />
          <div className={styles.collections__description}>
            <Text className={styles.collections__descriptionItem} size="sm">
              {texts.COLLECTIONS_FIRST_PARAGRAPH}
            </Text>
            <Text className={styles.collections__descriptionItem} size="sm">
              {texts.COLLECTIONS_SECOND_PARAGRAPH}
            </Text>
            <Text className={styles.collections__descriptionItem} size="sm">
              {texts.COLLECTIONS_THIRD_PARAGRAPH}
            </Text>
            <Text
              className={styles.collections__descriptionItem_pink}
              size="lg"
              color="pink"
            >
              {texts.COLLECTIONS_FOURTH_PARAGRAPH}
            </Text>
          </div>
        </>
      )}
    </section>
  );
};

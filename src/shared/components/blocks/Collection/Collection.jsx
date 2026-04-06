import { useState } from 'react';

import {
  CollectionsSlide,
  FiltersTabs,
  Slider,
  SliderControls,
  TitleWithCounter,
} from '@/shared/components';
import { collectionsData, filtersData } from '@/shared/constants';
import { getCurrentSlideNumber } from '@/shared/helpers';

import styles from './Collection.module.scss';

export const Collection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className={styles.collections}>
      {!!collectionsData.length && (
        <>
          <div className={styles.collections__tabsWrapper}>
            <TitleWithCounter
              title="КОЛЛЕКЦИИ"
              activeIndex={1}
              totalCount={3}
            />
            <FiltersTabs
              tabs={collectionsData.map(
                (collection, index) => collection.title
              )}
              activeIndex={activeIndex}
              onClick={() => {}}
            />
          </div>
          <Slider activeIndex={activeIndex}>
            {collectionsData.map((collection) => (
              <CollectionsSlide key={collection.title} />
            ))}
          </Slider>
          <SliderControls
            withCounter
            currentSlideNumber={getCurrentSlideNumber(activeIndex)}
            slidesTotalCount={filtersData.length}
            onNextSlide={() => {}}
            nextButtonText="Следующий слайд"
            className={styles.filters__sliderControls}
          />
        </>
      )}
    </section>
  );
};

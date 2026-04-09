import { useCallback, useState } from 'react';

import {
  BackstageSlide,
  SectionTitle,
  Slider,
  SliderControls,
  Text,
} from '@/shared/components';
import { backstageData } from '@/shared/constants';

import styles from './Backstage.module.scss';

export function Backstage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isSlideChanging, setIsSlideChanging] = useState(false);
  const [nextSlideIndex, setNextSlideIndex] = useState(0);

  const handleNextSlide = useCallback(() => {
    setNextSlideIndex((activeIndex + 1) % backstageData.length);
    setIsSlideChanging(true);
  }, [activeIndex, backstageData]);

  const onSlideChangingComplete = useCallback(() => {
    setActiveIndex(nextSlideIndex);
    setIsSlideChanging(false);
  }, [nextSlideIndex]);

  // const handleNextSlide = () => {
  //   setActiveIndex((activeIndex + 1) % backstageData.length);
  // };

  return (
    <section className={styles.backstage}>
      <div className={styles.backstage__container}>
        <div className={styles.backstage__descr}>
          <SectionTitle color="white">Backstage</SectionTitle>
          <Text>
            В&nbsp;поддержку капсулы команда AYT&Lambda;&Omicron; CREATIVE сняла
            видео- и&nbsp;фотокампейн, отправившись на&nbsp;Северный Кавказ,
            к&nbsp;подножию Эльбруса, через водопады и&nbsp;мистические
            заброшенные усадьбы. Весь фото- и&nbsp;видеоконтент созданы
            с&nbsp;помощью Mi&nbsp;10T Pro.
          </Text>
        </div>
        {!!backstageData.length && (
          <Slider
            className={styles.backstage__slider}
            activeIndex={activeIndex}
          >
            {backstageData.map((item) => (
              <BackstageSlide
                key={item.id}
                content={item.media}
                isSlideChanging={isSlideChanging}
                onNextSlide={handleNextSlide}
                onSlideChangingComplete={onSlideChangingComplete}
                reversed={item.reversed}
              />
            ))}
          </Slider>
        )}

        <SliderControls
          className={styles.backstage__sliderControls}
          onNextSlide={handleNextSlide}
          nextButtonText="ДАЛЕЕ"
        />
      </div>
    </section>
  );
}

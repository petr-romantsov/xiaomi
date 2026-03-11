import styles from './SlidesCounter.module.scss';

export const SlidesCounter = ({ currentSlide, totalSlides }) => {
  return (
    <div className={styles.slidesCounter}>
      {currentSlide} / {totalSlides}
    </div>
  );
};

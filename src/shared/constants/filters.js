import {
  filtersImage1,
  filtersImage2,
  filtersImage3,
  filtersImage4,
} from '@/assets/images';
import { filtersVideo } from '@/assets/videos';

export const filtersData = [
  {
    title: 'CYBERPUNK',
    video: filtersVideo,
    videoDescription:
      'Неоново-голубые и электрически-лиловые оттенки для создания футуристических эффектов.',
    image: filtersImage1,
    imageAlt: 'CYBERPUNK image.',
  },
  {
    title: 'COLOR FOCUS',
    video: filtersVideo,
    videoDescription: 'Яркий акцент на самом главном.',
    image: filtersImage2,
    imageAlt: 'COLOR FOCUS image.',
  },
  {
    title: 'GOLD VIBES',
    video: filtersVideo,
    videoDescription:
      'Глубокий контраст черного, золотого и серого для атмосферного контента.',
    image: filtersImage3,
    imageAlt: 'GOLD VIBES image.',
  },
  {
    title: 'BLACK ICE',
    video: filtersVideo,
    videoDescription:
      'Практическое отсутствие теплых красок — чистые холодные тона и приглушенная палитра.',
    image: filtersImage4,
    imageAlt: 'BLACK ICE image.',
  },
];

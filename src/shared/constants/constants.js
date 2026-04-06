import {
  blackiceBack,
  colorFocusBack,
  cyberpunkBack,
  filtersImage1,
  filtersImage2,
  filtersImage3,
  filtersImage4,
  goldvibesBack,
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
    backgroundImg: cyberpunkBack,
  },
  {
    title: 'COLOR FOCUS',
    video: filtersVideo,
    videoDescription: 'Яркий акцент на самом главном.',
    image: filtersImage2,
    imageAlt: 'COLOR FOCUS image.',
    backgroundImg: colorFocusBack,
  },
  {
    title: 'GOLD VIBES',
    video: filtersVideo,
    videoDescription:
      'Глубокий контраст черного, золотого и серого для атмосферного контента.',
    image: filtersImage3,
    imageAlt: 'GOLD VIBES image.',
    backgroundImg: goldvibesBack,
  },
  {
    title: 'BLACK ICE',
    video: filtersVideo,
    videoDescription:
      'Практическое отсутствие теплых красок\u00a0\u2014\u00a0чистые холодные тона и приглушенная палитра.',
    image: filtersImage4,
    imageAlt: 'BLACK ICE image.',
    backgroundImg: blackiceBack,
  },
];

export const collectionsData = [
  {
    title: 'LOOK1',
  },
  {
    title: 'LOOK2',
  },
  {
    title: 'LOOK3',
  },
  {
    title: 'LOOK4',
  },
  {
    title: 'LOOK5',
  },
];

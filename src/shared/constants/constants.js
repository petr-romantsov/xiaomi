import {
  backstageImage1_1,
  backstageImage2_1,
  backstageImage2_2,
  backstageImage3_1,
  backstageImage3_2,
  backstageImage4_2,
  blackiceBack,
  colorFocusBack,
  cyberpunkBack,
  filtersImage1,
  filtersImage2,
  filtersImage3,
  filtersImage4,
  goldvibesBack,
} from '@/assets/images';
import { conceptVideo, filtersVideo } from '@/assets/videos';

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

export const backstageData = [
  {
    id: 'backstage-1',
    media: [
      {
        type: 'image',
        image: backstageImage1_1,
      },
      {
        type: 'video',
        video: conceptVideo,
      },
    ],
  },
  {
    id: 'backstage-2',
    media: [
      {
        type: 'image',
        image: backstageImage2_1,
      },
      {
        type: 'video',
        video: conceptVideo,
      },
    ],
  },
  {
    id: 'backstage-3',
    media: [
      {
        type: 'image',
        image: backstageImage3_1,
      },
      {
        type: 'image',
        image: backstageImage3_2,
      },
    ],
  },
  {
    id: 'backstage-4',
    reversed: true,
    media: [
      {
        type: 'image',
        image: backstageImage4_2,
      },
      {
        type: 'video',
        video: conceptVideo,
      },
    ],
  },
];

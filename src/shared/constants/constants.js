import {
  backstageImage1_1,
  backstageImage2_1,
  backstageImage2_2,
  backstageImage3_1,
  backstageImage3_2,
  backstageImage4_2,
  blackiceBack,
  collectio4tshirt,
  collection1main,
  collection1number,
  collection1pants,
  collection1secondary,
  collection1shirt,
  collection2bag,
  collection2hoodie,
  collection2main,
  collection2number,
  collection2secondary,
  collection3cap,
  collection3main,
  collection3number,
  collection3secondary,
  collection3vest,
  collection4main,
  collection4number,
  collection4pants1,
  collection4pants2,
  collection4secondary,
  collection5cap,
  collection5main,
  collection5number,
  collection5pants,
  collection5secondary,
  collection5shirt,
  collection5vest,
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
    id: '01',
    content: [
      {
        image: collection1main,
      },
      {
        image: collection1secondary,
      },
      {
        image: collection1pants,
      },
      {
        image: collection1shirt,
      },
      {
        image: collection1number,
      },
    ],
  },
  {
    title: 'LOOK2',
    id: '02',
    content: [
      {
        image: collection2main,
      },
      {
        image: collection2secondary,
      },
      {
        image: collection2bag,
      },
      {
        image: collection2hoodie,
      },
      {
        image: collection2number,
      },
    ],
  },
  {
    title: 'LOOK3',
    id: '03',
    content: [
      {
        image: collection3main,
      },
      {
        image: collection3secondary,
      },
      {
        image: collection3cap,
      },
      {
        image: collection3vest,
      },
      {
        image: collection3number,
      },
    ],
  },
  {
    title: 'LOOK4',
    id: '04',
    content: [
      {
        image: collection4main,
      },
      {
        image: collection4secondary,
      },
      {
        image: collection4pants1,
      },
      {
        image: collection4pants2,
      },
      {
        image: collectio4tshirt,
      },
      {
        image: collection4number,
      },
    ],
  },
  {
    title: 'LOOK5',
    id: '05',
    content: [
      {
        image: collection5main,
      },
      {
        image: collection5secondary,
      },
      {
        image: collection5cap,
      },
      {
        image: collection5vest,
      },
      {
        image: collection5shirt,
      },

      {
        image: collection5pants,
      },
      {
        image: collection5number,
      },
    ],
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

export const IMAGE_TRANSITION = {
  duration: 0.7,
  ease: 'easeInOut',
};

export const IMAGE_VARIANTS = {
  enter: (delay = 0) => ({
    x: '120%',
    transition: {
      ...IMAGE_TRANSITION,
      delay,
    },
  }),
  center: (delay = 0) => ({
    x: 0,
    transition: {
      ...IMAGE_TRANSITION,
      delay,
    },
  }),
  exit: (delay = 0) => ({
    x: '-120%',
    transition: {
      ...IMAGE_TRANSITION,
      delay,
    },
  }),
};

export const SLIDER_DELAYS = {
  FIRST_IMAGE_DELAY: 0.05,
  SECOND_IMAGE_DELAY: 0.3,
};

import { AboutSectionType } from '@/lib/types/sections';

export const aboutSection: AboutSectionType = {
  title: 'ABOUT ME',
  // Paragraphs need to be changed from `/containers/About.tsx`
  list: {
    title: 'Here are a few technologies I’ve been working with recently:',
    items: [
      'CapacitorJs',
      'VueJs',
      'NextJs',
      'ReactJs',
      'AngularJs',
      'Jest',
      'BootstrapCSS',
      'TailwindCSS',
    ],
  },
  img: '/kurty.png',
};

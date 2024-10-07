import { AboutSectionType } from '@/lib/types/sections';

export const aboutSection: AboutSectionType = {
  title: 'ABOUT ME',
  // Paragraphs need to be changed from `/containers/About.tsx`
  // Because it wasn't possible to insert anchor tags like this
  list: {
    title: 'Here are a few technologies I’ve been working with recently:',
    items: [
      'CapacitorJs',
      'VueJs',
      'NextJs',
      'ReactJs',
      'BootstrapCSS',
      'TailwindCSS',
    ],
  },
  img: '/kurt.jpg',
};

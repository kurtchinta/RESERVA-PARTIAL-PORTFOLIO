import { FeaturedProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

const featuredProjectsSection: FeaturedProjectsSectionType = {
  title: "PROJECT I'VE WORKED ON",
  projects: [
    {
      id: getId(),
      name: 'FitFlex',
      description: 'A fitness app for personalized workouts & diet plans.',
      tasks:
        "As a student, I recognized the project requirements and worked on developing a fitness app. I designed the frontend user interface and set up the backend with a database to ensure everything functioned smoothly. This experience helped me learn how to integrate various features effectively.",
      url: '#',
      img: '/fitflex2.jpg', // Relative path to image in the public folder
      tags: [
        'HTML',
        'CapacitorJs',
        'Javascipt',
        'BootstrapCSS',
        'Supabase',
      ],
    },
  ],
};

export default featuredProjectsSection;

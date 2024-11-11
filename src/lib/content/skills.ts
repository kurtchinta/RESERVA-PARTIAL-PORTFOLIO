import { SkillsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

export const skillsSection: SkillsSectionType = {
  title: 'HERE ARE MY SKILLS',
  skills: [
    {
      id: getId(),
      title: 'full stack development',
      // animation lottie file: https://lottiefiles.com/
      lottie: {
        light: '/lotties/frontend.json',
        dark: '/lotties/frontend-dark.json',
      },
      points: [
        'Building full-stack web applications using Next.js with TypeScript, TailwindCSS/Bootstrap, and Postgres/Supabase.',
        'Creating responsive single-page applications with CapacitorJs, VueJs, and ReactJs, and developing web and mobile apps using modern frameworks for user-friendly solutions.',
      ],
      softwareSkills: [
        // iconify icons: https://icon-sets.iconify.design/
        { name: 'html', icon: 'vscode-icons:file-type-html' },
        { name: 'CSS', icon: 'vscode-icons:file-type-css' },
        { name: 'javaScript', icon: 'vscode-icons:file-type-js-official' },
        {
          name: 'typeScript',
          icon: 'vscode-icons:file-type-typescript-official',
        },
        { name: 'supabase', icon: 'logos:supabase-icon' },
        { name: 'capacitorjs', icon: 'logos:capacitorjs-icon' },
        { name: 'reactjs', icon: 'logos:react' },
        { name: 'nextjs', icon: 'logos:nextjs-icon' },
        { name: 'vuejs', icon: 'devicon:vuejs' },
        { name: 'angularjs', icon: 'vscode-icons:file-type-angular' },
        { name: 'jest', icon: 'vscode-icons:file-type-jest' },
        { name: 'tailwindcss', icon: 'logos:tailwindcss-icon' },
        { name: 'bootstrapcss', icon: 'logos:bootstrap' },
        { name: 'postgres', icon: 'logos:postgresql' },
      ],
    },
    {
      id: getId(),
      title: 'UI/UX designing',
      lottie: {
        light: '/lotties/designing.json',
        dark: '/lotties/designing-dark.json',
      },
      points: [
        'Experience in designing user-friendly interfaces with figma.',
        'Engaged in Canva designing to enhance visual creativity.',
        'Experience in developing design systems and style guides.',
        'Providing user-friendly design solutions that prioritize the end-user experience.',
      ],
      softwareSkills: [
        { name: 'figma', icon: 'logos:figma' },
        { name: 'canva', icon: 'devicon:canva' },
        { name: 'adobe illustrator', icon: 'logos:adobe-illustrator' },
        { name: 'adobe photoshop', icon: 'logos:adobe-photoshop' },
      ],
    },
  ],
};

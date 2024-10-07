import { socialLinks } from '@/lib/content/portfolio';
import { SocialSectionType } from '@/lib/types/sections';

export const socialSection: SocialSectionType = {
  socialLinks: [
    {
      icon: 'mdi:instagram',
      url: socialLinks.instagram,
    },
    {
      icon: 'lucide:facebook',
      url: socialLinks.facebook,
    },
    {
      icon: 'tabler:brand-tiktok', 
      url: socialLinks.tiktok, 
    },
    {
      icon: 'tabler:brand-x', // Use X icon
      url: socialLinks.twitter, // X (Twitter) link
    },
    {
      icon: 'tabler:brand-github',
      url: socialLinks.github,
    },
  ],
};

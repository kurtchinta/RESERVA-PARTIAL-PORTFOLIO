import { author } from '@/lib/content/portfolio';
import { ContactSectionType } from '@/lib/types/sections';

export const contactSection: ContactSectionType = {
  title: 'CONTACT ME',
  subtitle: "What’s Next?",
  paragraphs: [
    'I would be happy to hear about your project ideas and how I can help you bring them to life. If you have any questions, need more information, or want to discuss your specific needs, please feel free to reach out. I’m here to help you find the best solution for your project.',
  ],
  link: `mailto:${author.email}`,
  contactInfo: {
    location: {
      icon: 'MapPin',
      title: 'Location',
      content: 'Purok 3, Barangay Talo-ao, Buenavista Agusan del Norte'
    },
    phone: {
      icon: 'Phone',
      title: 'Call',
      content: '+639385416513'
    },
  },
};
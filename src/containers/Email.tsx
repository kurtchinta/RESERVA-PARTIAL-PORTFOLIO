import { author } from '@/lib/content/portfolio';
import { Sidebar, SocialLink } from '@/components';
import { MdEmail } from 'react-icons/md'; // Import the email icon from react-icons

const Email = () => {
  return (
    <Sidebar side="right">
      <SocialLink
        href={`mailto:${author.email}`}
        className="[writing-mode:vertical-lr] font-mono tracking-widest text-xs flex items-center space-x-2"
      >
        <MdEmail className="text-xl transform rotate-90" /> {/* Rotate the email icon by 90 degrees */}
        <span>{author.email}</span> {/* Email text */}
      </SocialLink>
    </Sidebar>
  );
};

export default Email;

import { contactSection } from '@/lib/content/contact';
import { Button, Wrapper } from '@/components';
import { getSectionAnimation } from '@/styles/animations';
import dynamic from 'next/dynamic'; // Dynamic import for icons

// Dynamic import for Lucide icons
const MapPinIcon = dynamic(() => import('lucide-react').then(mod => mod.MapPin), { ssr: false });
const PhoneIcon = dynamic(() => import('lucide-react').then(mod => mod.Phone), { ssr: false });

const Contact = () => {
  const { subtitle, title, paragraphs, link, contactInfo } = contactSection;

  return (
    <Wrapper
      id="contact"
      className="max-w-xl mx-auto text-center !py-16 md:!py-24 mb-20 md:mb-32"
      {...getSectionAnimation}
    >
      <p className="mb-3 font-mono text-sm capitalize text-accent">{subtitle}</p>
      <h2 className="heading-secondary !mb-5">{title}</h2>

      {paragraphs.map((paragraph, i) => (
        <p key={i} className="mb-4">{paragraph}</p>
      ))}

      {/* Contact Info Section */}
      <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-12 my-10">
        {/* Location Info */}
        <div className="text-left flex items-center space-x-3">
          <MapPinIcon className="text-blue-500 w-8 h-8" /> {/* Icon color changed to blue */}
          <div>
            <h4 className="dark:text-white text-black font-bold">{contactInfo.location.title}</h4>
            <p className="dark:text-gray-400 text-black">{contactInfo.location.content}</p>
          </div>
        </div>

        {/* Call Info */}
        <div className="text-left flex items-center space-x-3">
          <PhoneIcon className="text-blue-500 w-6 h-6" /> {/* Icon color changed to blue */}
          <div>
            <h4 className="dark:text-white text-black font-bold">{contactInfo.phone.title}</h4>
            <p className="dark:text-gray-400 text-black">{contactInfo.phone.content}</p>
          </div>
        </div>
      </div>

      {/* Send a Message Button */}
      <Button type="link" size="lg" href={link} center className="mt-12">
        SEND A MESSAGE
      </Button>
    </Wrapper>
  );
};

export default Contact;

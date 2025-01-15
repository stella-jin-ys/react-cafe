import React from "react";
import {FaDribbbleSquare, FaFacebookSquare, FaGithubSquare, FaInstagram, FaTwitterSquare} from 'react-icons/fa';
// Reusable SocialIcon component with hover effect
import { IconType } from 'react-icons';

const SocialIcon = ({ icon: Icon }: { icon: IconType }) => (
  <Icon className="social-icon hover:text-[#dce1de]" size={30} />
);

// Footer component
const Footer = () => {
  // Array defining the content and structure of the footer
  const items = [
    // Social media icons
    { id: 'facebook', type: 'icon', icon: FaFacebookSquare },
    { id: 'instagram', type: 'icon', icon: FaInstagram },
    { id: 'twitter', type: 'icon', icon: FaTwitterSquare }
  ];
  return (
    <div className='bg-gray mx-auto py-16 px-4 grid cg:grid-cols-3 gap-8 text-gray-300 justify-center'>

      <div>
        <div className='flex justify-between md:w-[100%] my-6'>
          {items.map((item, index) => (
            item.type === 'icon' ? (
              <SocialIcon key={item.id} icon={item.icon} />
            ) : null
          ))}
        </div>
      </div>
    </div>
  );
};
export default Footer;

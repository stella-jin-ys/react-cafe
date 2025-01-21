import React from "react";
import {FaFacebookSquare,FaInstagram, FaTwitterSquare} from 'react-icons/fa';
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
    <div className='bg-gray mx-auto py-16 px-4 grid cg:grid-cols-3 gap-8 text-gray-300 justify-center items-center'>
      <div className='col-span-3 md:col-span-1 flex justify-center items-center flex-col'>
      <h6 className='font-bold uppercase pt-2 text-center'>Look for our address on the screen</h6>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019112484564!2d144.9630579153167!3d-37.81410797975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d9f0b1b0b1b!2sReact%20Cafe!5e0!3m2!1sen!2sus!4v1633072800000!5m2!1sen!2sus"
        width="100%"
        height="200"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy" title="This is a unique title"
      ></iframe>
      </div>
      <div className='col-span-3 md:col-span-1 flex justify-center items-center flex-col'>
      <div className='flex justify-between md:w-[100%] my-6 space-x-4'>
        {items.map((item, index) => (
        item.type === 'icon' ? (
          <SocialIcon key={item.id} icon={item.icon} />
        ) : null
        ))}
      </div>
      <p className='text-center text-blue-500 text-sm mt-4'>
        © 2025 React Cafe. All rights reserved.
      </p>
      </div>
    </div>
  );
};
export default Footer;

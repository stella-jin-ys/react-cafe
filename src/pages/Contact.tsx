import React from 'react';
import Footer from '../components/Footer';


export default function Contact() {
  return (
    <div className='bg-gray min-h-screen flex flex-col justify-between'>
      <div className='flex justify-center items-center flex-grow'>
      <div className='space-y-2 p-4'>
        <p className='text-lg'>
        <strong>Your welcome to contact us.</strong>
        </p>
        <p className='text-base'>
        Address:
        </p>
        <p className='text-sm'>
        Brunchy Coffee,
        <br />
        1234 Maplewood Avenue,
        <br />
        Suite 100, Brookside,
        <br />
        CA 90210
        </p>
        <p className='text-base'>
        Open Hours:
        </p>
        <p className='text-sm'>
        Mo-Sun 9 AM - 5PM
        </p>
        <p className='text-base'>
        Email: <a href="mailto:link@reactcafe.com" className='text-blue-500 underline'>link@reactcafe.com</a>
        </p>
        <p className='text-base'>
        Phone: <a href="tel:link-phonenumber" className='text-blue-500 underline'>link-phonenumber</a>
        </p>
      </div>

      <div className='flex flex-col space-y-4'>
        <img className='h-100 w-96' src="/img/coffeshop.png" alt="coffeshop1" />
        <img className='h-100 w-96' src="/img/coffeshops.png" alt="coffeshop2" />
      </div>
      </div>

      <Footer />
    </div>
    
  )
}

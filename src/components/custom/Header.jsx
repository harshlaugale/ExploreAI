import React from 'react';
import { Button } from '../ui/button';

function Header() {
  return (
    <div className='px-4 py-2 shadow-sm flex justify-between items-center'>
      <img src='/logo.svg' alt="logo" style={{ height: '50px' }} />
      <div className='text-xl font-medium flex items-center gap-9'>
        <a href="#about-us" className="hover:text-blue-600">About Us</a>
        <a href="#reviews" className="hover:text-blue-600">Reviews</a>
        <a href="#contact-us" className="hover:text-blue-600">Contact Us</a>
        <Button className="w-32 bg-blue-600 text-white hover:bg-blue-500">Sign In</Button>
      </div>
    </div>
  );
}

export default Header;

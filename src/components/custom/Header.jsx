import React from 'react';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
import Review from './Review';
import Aboutus from './Aboutus';

function Header() {
  return (
    <div className="px-4 py-2 shadow-sm flex justify-between items-center">
      <img src="/logo.svg" alt="logo" style={{ height: '50px' }} />
      <div className="text-xl font-medium flex items-center gap-9">
        
        {/* <Link to="/about-us" className="hover:text-blue-600">About Us</Link> */}
        <a href="Aboutus" className="hover:text-blue-600">AboutUs</a>
        <a href="Review" className="hover:text-blue-600">Reviews</a>
        <a href="#contact-us" className="hover:text-blue-600">Contact Us</a>
        <Button className="w-32 bg-blue-600 text-white hover:bg-blue-500">Sign In</Button>
      </div>
    </div>
  );
}

export default Header;

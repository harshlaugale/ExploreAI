import React from 'react';
import { Button } from '../ui/button';

function Contact() {
  return (
    <div className="flex flex-wrap h-screen">

      {/* Left Side */}
      <div className="w-full md:w-1/3 flex flex-col justify-center items-center p-5 space-y-4">
        <img src="contact_img2.jpg" alt="Travel Image 1" className="w-full h-72 object-cover rounded-lg shadow-xl" />
        <img src="contact_img1.jpg" alt="Travel Image 2" className="w-full h-72 object-cover rounded-lg shadow-xl" />
      </div>

      {/* Right Side */}
      <div className="w-full md:w-2/3 bg-blue-600 bg-opacity-80 text-white flex flex-col items-center justify-center p-8 space-y-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center leading-snug">
          Are you a traveler in need of help? Have a question about your review? Problems booking your hotel, flight, or attraction/activity?
        </h2>

        <h4 className="text-lg md:text-xl font-semibold text-center">
          We want to help! <br />
          We’re here to help you plan the perfect trip!
        </h4>

        <div className="flex flex-row justify-center items-center gap-6">
          <div className="flex flex-col items-center w-64 bg-white bg-opacity-90 text-blue-600 rounded-lg shadow-2xl p-4 transform transition-transform duration-300 hover:scale-105 hover:bg-blue-50">
            <span className="text-lg font-medium">Call</span>
            <span className="text-base">123 456 7890</span>
            <Button className="mt-2 hover:bg-blue-600 hover:text-white transition-colors duration-300">Call now</Button>
          </div>

          <div className="flex flex-col items-center w-64 bg-white bg-opacity-90 text-blue-600 rounded-lg shadow-2xl p-4 transform transition-transform duration-300 hover:scale-105 hover:bg-blue-50">
            <span className="text-lg font-medium">Mail</span>
            <span className="text-base">paramountestate@gmail.com</span>
            <Button className="mt-2 hover:bg-blue-600 hover:text-white transition-colors duration-300">Email now</Button>
          </div>

          <div className="flex flex-col items-center w-64 bg-white bg-opacity-90 text-blue-600 rounded-lg shadow-2xl p-4 transform transition-transform duration-300 hover:scale-105 hover:bg-blue-50">
            <span className="text-lg font-medium">Chat</span>
            <span className="text-base">123 456 7890</span>
            <Button className="mt-2 hover:bg-blue-600 hover:text-white transition-colors duration-300">Chat now</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

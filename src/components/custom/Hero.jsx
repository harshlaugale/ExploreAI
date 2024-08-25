import React from 'react';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <video 
        autoPlay 
        loop 
        muted 
        className="absolute top-1/2 left-1/2 w-full h-full object-cover transform -translate-x-1/2 -translate-y-1/2"
      >
        <source src="bg_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Black transparent tint */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center gap-12">
        <h1 className="font-extrabold text-5xl md:text-6xl text-white">
          Discover Your Next Adventure with AI: <br />Personalized Itineraries at Your Fingertips
        </h1>
        <p className="text-xl text-white">
          Your personal trip planner and travel curator, <br />creating custom itineraries tailored to your interest and budget.
        </p>
        <Link to={'/create-trip'}>
        <Button className="w-64 h-12 bg-blue-600 text-white text-xl font-bold hover:bg-blue-500">Get Started, It's Free</Button>
        </Link>
        </div>
    </div>
  );
}

export default Hero;

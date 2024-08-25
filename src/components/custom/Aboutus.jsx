import React from 'react';

function Aboutus() {
  return (
    <div className="flex h-screen">
      {/* Left Side */}
      <div className="left bg-blue-600 bg-opacity-80 text-white flex flex-col items-center justify-center p-8 w-1/2">
        <h2 className="text-4xl italic font-bold text-center">
          Travel the world through <span className="text-black">ExploreAI</span>
        </h2>
        <br />
        <h4 className="text-lg font-semibold text-center mt-4">
        ExploreAI has been offering the best vacation packages since 2024.
          <br />
          We guarantee that every trip you book with us
          will be unique and unforgettable.
        </h4>
      </div>

      {/* Right Side */}
      <div className="right w-1/2 flex flex-col justify-center items-center p-5 space-4 gap-1">
        <img src="travel_img1.jpg" alt="Travel Image 1" className="w-full h-72 shadow-lg" />
        <img src="travel_img2.jpg" alt="Travel Image 2" className="w-full h-72 shadow-lg" />
      </div>
    </div>
  );
}

export default Aboutus;

import React from 'react';

function Review() {
  const reviews = [
    {
      name: 'John Doe',
      rating: 5,
      comment: 'Amazing experience! Highly recommend ExploreAI for all your travel needs.',
    },
    {
      name: 'Jane Smith',
      rating: 4,
      comment: 'Great service and fantastic locations. Will book again!',
    },
    {
      name: 'Samuel Green',
      rating: 3,
      comment: 'Good service, but there is room for improvement in customer support.',
    },
  ];

  return (
    <div className="relative p-8 min-h-screen flex flex-col items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: 'url("review.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          filter: 'brightness(80%)', // Make the image darker
        }}
      ></div>

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black opacity-30"
        style={{
          zIndex: -1, // Place the overlay behind content
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-4xl font-bold text-center mb-16 text-white">Our Travellers Review</h1>

        <div className="flex flex-wrap justify-center gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="border p-6 shadow-md bg-white bg-opacity-90 w-80">
              <h2 className="text-xl font-semibold">{review.name}</h2>
              <div className="flex flex-col mt-2">
                <span className="text-yellow-500">
                  {'★'.repeat(review.rating)}
                  {'☆'.repeat(5 - review.rating)}
                </span>
                <span className="mt-2 text-gray-600">{review.comment}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500">
            Add Your Review
          </button>
        </div>
      </div>
    </div>
  );
}

export default Review;

import React, { useState } from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SelectBudgetOptions, SelectTravelesList } from '@/constants/options';

function CreateTrip() {
  const [place, setPlace] = useState(null); // Initialize state correctly

  return (
    <div className='sm:px-10 md:px-32 lg:px-56 xl:px-60 px-5 m-10'>
      <h2 className="text-3xl font-bold">Tell us your travel preference</h2>
      <p className="text-xl mt-3 text-gray-600">
        Just provide some basic information, and our trip planner will generate a customized itinerary based on your preferences.
      </p>

      <div className='mt-20 flex flex-col gap-2'>
        <h2 className='text-xl my-3 font-medium'>
          What is your destination of choice?
        </h2>
        <GooglePlacesAutocomplete
          apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY} // Ensure this environment variable is correctly set
          selectProps={{
            value: place,
            onChange: (v) => {
              setPlace(v);
              console.log(v); // Log the value inside the onChange callback
            },
          }}
        />
      </div>

      <div className='mt-10'>
        <h2 className='text-xl my-5 font-medium'>
          How many days are you planning your trip?
        </h2>
        <input 
          placeholder='Example: 3' 
          type='number' 
          className='border border-gray-300 p-2 rounded w-full'
        />
      </div>

      <div className='mt-10'>
        <h2 className='text-xl mt-5 font-medium'>
        What is your budget?         
        </h2>
        <p className='text-lg my-2 text-gray-600'>
          The budget is exclusively allocated for activities and dining purposes.
        </p>
        <div className='grid grid-cols-3 gap-5 mt-10'>
          {SelectBudgetOptions.map((item) => (
            <div key={item.id} className='flex flex-row items-center space-x-10 p-4 border rounded-lg cursor-pointer hover:shadow-2xl shadow-lg'>
              <FontAwesomeIcon icon={item.icon} className='text-2xl text-gray-600' />
              <div>
                <h3 className='text-lg font-semibold'>{item.title}</h3>
                <p className='text-gray-400 font-semibold'>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='mt-14'>
        <h2 className='text-xl mt-5 font-medium'>
          Who do you plan on travelling with on your next Adventure?
        </h2>
        <p className='text-lg my-2 text-gray-600'>
          The budget is exclusively allocated for activities and dining purposes.
        </p>
        <div className='grid grid-cols-3 gap-5 mt-10'>
          {SelectTravelesList.map((item) => (
            <div key={item.id} className='flex flex-row items-center space-x-10 p-4 border rounded-lg cursor-pointer hover:shadow-2xl shadow-lg'>
              <FontAwesomeIcon icon={item.icon} className='text-2xl text-gray-600' />
              <div>
                <h3 className='text-lg font-semibold'>{item.title}</h3>
                <p className='text-gray-400 font-semibold'>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CreateTrip;

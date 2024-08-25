import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AI_PROMPT, SelectBudgetOptions, SelectTravelesList } from '@/constants/options';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { chatSession } from '@/service/AIModal';

function CreateTrip() {
  const [destination, setDestination] = useState('');
  const [formData, setFormData] = useState({});
  const [selectedBudget, setSelectedBudget] = useState(null);
  const [selectedTravelers, setSelectedTravelers] = useState(null);

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const OnGenerateTrip = async() => {
    const { days, budget, travelers } = formData;
    if (!destination || !days || !budget || !travelers) {
      toast.error("Please fill in all details");
      return;
    }

    const FINAL_PROMPT = AI_PROMPT
      .replace('{location}', destination)
      .replace('{totalDays}', days || '')
      .replace('{traveler}', travelers?.title || '') // Using title for travelers
      .replace('{budget}', budget?.title || ''); // Using title for budget

    console.log(FINAL_PROMPT);
    console.log(formData);

    const result = await chatSession.sendMessage(FINAL_PROMPT);
  
     console.log(result?.response?.text());
  };

  return (
    <div className='sm:px-10 md:px-32 lg:px-56 xl:px-60 px-5 m-10'>
      <h2 className="text-3xl font-bold">Tell us your travel preference ✈️🏝️</h2>
      <p className="text-xl mt-3 text-gray-600">
        Just provide some basic information, and our trip planner will generate a customized itinerary based on your preferences.
      </p>

      <div className='mt-20 flex flex-col gap-2'>
        <h2 className='text-xl my-3 font-medium'>
          What is your destination of choice?
        </h2>
        <input 
          type='text' 
          placeholder='Enter your destination' 
          className='border border-gray-300 p-2 rounded w-full'
          value={destination}
          onChange={(e) => {
            setDestination(e.target.value);
            setFormData({ ...formData, destination: e.target.value });
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
          onChange={(e) => setFormData({ ...formData, days: e.target.value })}
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
            <div 
              key={item.id} 
              className={`flex flex-row items-center space-x-10 p-4 border rounded-lg cursor-pointer shadow-lg
              ${selectedBudget?.id === item.id ? 'bg-blue-100 text-blue-700' : 'hover:bg-blue-100 hover:text-blue-700'}`}
              onClick={() => {
                setSelectedBudget(item);
                setFormData({ ...formData, budget: item });
              }}
            >
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
          Who do you plan on travelling with on your next adventure?
        </h2>
        <p className='text-lg my-2 text-gray-600'>
          The budget is exclusively allocated for activities and dining purposes.
        </p>
        <div className='grid grid-cols-3 gap-5 mt-10'>
          {SelectTravelesList.map((item) => (
            <div 
              key={item.id} 
              className={`flex flex-row items-center space-x-10 p-4 border rounded-lg cursor-pointer shadow-lg
              ${selectedTravelers?.id === item.id ? 'bg-blue-100 text-blue-700' : 'hover:bg-blue-100 hover:text-blue-700'}`}
              onClick={() => {
                setSelectedTravelers(item);
                setFormData({ ...formData, travelers: item });
              }}
            >
              <FontAwesomeIcon icon={item.icon} className='text-2xl text-gray-600' />
              <div>
                <h3 className='text-lg font-semibold'>{item.title}</h3>
                <p className='text-gray-400 font-semibold'>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='my-10 justify-end flex'>
        <Button onClick={OnGenerateTrip}>
          Generate Trip
        </Button>
      </div>
    </div>
  );
}

export default CreateTrip;

import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AI_PROMPT, SelectBudgetOptions, SelectTravelesList } from '@/constants/options';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { chatSession } from '@/service/AIModal';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog";
import { FcGoogle } from "react-icons/fc";
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { faL } from '@fortawesome/free-solid-svg-icons';

function CreateTrip() {
  const [destination, setDestination] = useState('');
  const [formData, setFormData] = useState({});
  const [selectedBudget, setSelectedBudget] = useState(null);
  const [selectedTravelers, setSelectedTravelers] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      console.log('Google login token response:', tokenResponse);
      GetUserProfile(tokenResponse);
    },
    onError: (error) => console.log('Google login error:', error)
  });
  

  // Corrected Axios request function to get the user profile
  const GetUserProfile = (tokenInfo) => {
    console.log('Fetching user profile with token:', tokenInfo?.access_token);
  
    axios
      .get('https://www.googleapis.com/oauth2/v1/userinfo', {
        headers: {
          Authorization: `Bearer ${tokenInfo?.access_token}`,
          Accept: 'application/json',
        },
        params: {
          access_token: tokenInfo?.access_token,
        },
      })
      .then((response) => {
        console.log('API Response:', response);
        console.log('User Data:', response.data);
        try {
          localStorage.setItem('user', JSON.stringify(response.data));
          console.log('User data stored in local storage:', localStorage.getItem('user')); // Log raw data
        } catch (error) {
          console.error('Error storing user data in local storage:', error);
        }
        setOpenDialog(false);
        OnGenerateTrip();
      })
      .catch((error) => {
        console.error('Error fetching user profile:', error);
        toast.error('Failed to fetch user profile.');
      });
  };
  
  

  const OnGenerateTrip = async () => {
    const user = localStorage.getItem('user');
    if (!user) {
      setOpenDialog(true); // Correct state update
      return;
    }

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

    try {
      const result = await chatSession.sendMessage(FINAL_PROMPT);
      console.log(result?.response?.text());
    } catch (error) {
      toast.error("Error generating trip details");
      console.error(error);
    }
  };

  return (
    <div className='sm:px-10 md:px-32 lg:px-56 xl:px-60 px-5 m-10'>
      <h2 className="text-3xl font-bold">Tell us your travel preference ✈️🏝️</h2>
      <p className="text-xl mt-3 text-gray-600">
        Just provide some basic information, and our trip planner will generate a customized itinerary based on your preferences.
      </p>

      <div className='mt-20 flex flex-col gap-2'>
        <h2 className='text-xl my-3 font-medium'>What is your destination of choice?</h2>
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
        <h2 className='text-xl my-5 font-medium'>How many days are you planning your trip?</h2>
        <input
          placeholder='Example: 3'
          type='number'
          className='border border-gray-300 p-2 rounded w-full'
          onChange={(e) => setFormData({ ...formData, days: e.target.value })}
        />
      </div>

      <div className='mt-10'>
        <h2 className='text-xl mt-5 font-medium'>What is your budget?</h2>
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
        <h2 className='text-xl mt-5 font-medium'>Who do you plan on travelling with on your next adventure?</h2>
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
        <Button onClick={OnGenerateTrip}>Generate Trip</Button>
      </div>

      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogDescription>
              <img src="/logo.svg" alt="logo" className='w-36' />
              <h2 className='font-bold text-lg mt-7'>Sign In with Google</h2>
              <p>Sign in to the App with Google Authentication Securely</p>

              <Button 
                onClick={login}
                className='w-full mt-5 flex gap-4 items-center'>               
                <FcGoogle className='h-7 w-7'/>
                Sign In with Google
              </Button>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default CreateTrip;

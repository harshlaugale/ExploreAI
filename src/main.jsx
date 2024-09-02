import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import CreateTrip from './create-trip/index.jsx';
import Header from './components/custom/Header.jsx';
import Aboutus from './components/custom/AboutUs.jsx';
import Review from './components/custom/Review.jsx';
import Contact from './components/custom/Contact.jsx';
import { Toaster } from '@/components/ui/sonner';
import { GoogleOAuthProvider } from '@react-oauth/google';

// Define the routes for the application
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header />
        <App />
        <Toaster />
      </>
    ),
  },
  {
    path: '/create-trip',
    element: (
      <>
        <Header />
        <CreateTrip />
        <Toaster />
      </>
    ),
  },
  {
    path: '/aboutus',
    element: (
      <>
        <Header />
        <Aboutus />
        <Toaster />
      </>
    ),
  },
  {
    path: '/review',
    element: (
      <>
        <Header />
        <Review />
        <Toaster />
      </>
    ),
  },
  {
    path: '/contact',
    element: (
      <>
        <Header />
        <Contact />
        <Toaster />
      </>
    ),
  },
]);

// Render the application to the root element
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Provide the Google OAuth context to the entire application */}
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID}>
      <RouterProvider router={router} />
    </GoogleOAuthProvider>
  </StrictMode>
);

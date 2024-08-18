import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import CreateTrip from './create-trip/index.jsx';
import Header from './components/custom/Header.jsx';
import Aboutus from './components/custom/AboutUs.jsx'; // Import AboutUs
import Review from './components/custom/Review.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header />
        <App />
      </>
    ),
  },
  {
    path: '/create-trip',
    element: (
      <>
        <Header />
        <CreateTrip />
      </>
    ),
  },
  {
    path: '/aboutus',  // Define the about-us route
    element: (
      <>
        <Header />
        <Aboutus />
      </>
    ),
  },
  {
    path: '/review',  // Define the about-us route
    element: (
      <>
        <Header />
        <Review />
      </>
    ),
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
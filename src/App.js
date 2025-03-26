import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Loader from './components/Loader'; // Import Loader

// Lazy Load Pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Packages = lazy(() => import('./pages/Packages'));
const Destination = lazy(() => import('./pages/Destination'));
const Booking = lazy(() => import('./pages/Booking'));
const Team = lazy(() => import('./pages/Team'));
const Testimonial = lazy(() => import('./pages/Testimonial'));
const Error = lazy(() => import('./pages/Error'));
const Contact = lazy(() => import('./pages/Contact'));
const Privacy = lazy(() => import('./pages/Privacy'));

export default function App() {
  return (
    <div>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/packages' element={<Packages />} />
          <Route path='/destination' element={<Destination />} />
          <Route path='/booking' element={<Booking />} />
          <Route path='/team' element={<Team />} />
          <Route path='/testimonial' element={<Testimonial />} />
          <Route path='/error' element={<Error />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/privacy' element={<Privacy />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

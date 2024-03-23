
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutUs from './components/AboutUs/AboutUs';
import Review from './components/Review/Review';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Navbar from './components/Navbar/Navbar';
import CustomCarousel from './components/Carousel/CustomCarousel';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';

const App = () => {
  const [activeSection, setActiveSection] = useState('');

  const handleSetActive = (section) => {
    setActiveSection(section);
  };

  

  return (
    
    <div>
    <Navbar activeSection={activeSection} handleSetActive={handleSetActive} />
    <CustomCarousel />
      <AboutUs />
     <Review />
    <Login />
    <SignUp />
    <Contact />
    <Footer />
    </div>
  );
};

export default App;
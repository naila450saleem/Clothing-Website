import React from 'react';
import PopupModal from '../Components/Popup/PopupModal';
import Banner from '../Components/Banner';
import Hero from '../Components/Hero/Hero'; 
import Elementor from '../Components/Elementor';
import Footer from '../Pages/Footer';
// import ElementorE from '../Components/ElementorE';
// import ElementorSec from '../Components/Elementorsec';


const Home = () => {
  return (
    <>
  <PopupModal />
    <Banner />
      <Hero />
      <Elementor />
      {/* <ElementorE />
      <ElementorSec /> */}
<Footer />
    </>
  );
};

export default Home;

import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Slider from '../../components/Slider/Slider';
import HowItWorks from '../../components/HowItWorks/HowItWorks';
import EventSection from '../../components/UpComingEvents/EventSection/EventSection'
import MiniGallery from '../../components/MiniGallery/MiniGallery'
class HomePage extends Component {
  render() {
    return (
      <main className="wrapper">
        <Header />
        <Slider />
        <EventSection />
        <HowItWorks />
        <MiniGallery />
        <Footer />
      </main>
    );
  }
}

export default HomePage;

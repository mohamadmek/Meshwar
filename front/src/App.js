import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Slider from './components/Slider/Slider';
import EventCard from './components/UpComingEvents/EventCard/EventCard';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Header/>
      <Slider />
      <Footer />
      
    </div>
  );
}

export default App;

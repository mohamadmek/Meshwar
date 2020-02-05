import React from 'react';
import logo from './logo.svg';
import './App.css';
import HowItWorks from './components/HowItWorks/HowItWorks';
import Header from './components/Header/Header';
import GalleryContainer from './components/GalleryContainer/GalleryContainer';


function App() {
  return (
    <div className="App">
      <Header/>
      <HowItWorks />
      <GalleryContainer />
      
    </div>
  );
}

export default App;

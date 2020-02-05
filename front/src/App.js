import React from 'react';
import logo from './logo.svg';
import './App.css';
import HowItWorks from './components/HowItWorks/HowItWorks';
import Header from './components/Header/Header';


function App() {
  return (
    <div className="App">
      <Header/>
      <HowItWorks />
      
    </div>
  );
}

export default App;

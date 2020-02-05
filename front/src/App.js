import React, {Component} from 'react';
import './App.css';
import EventCard from './components/UpComingEvents/EventCard/EventCard'
import Header from './components/Header/Header'
import Slider from './components/Slider/Slider'
class App extends Component() {
  render() {
  
    return (
      <div className="App">
        <Header/>
        <Slider />
        <EventCard />
      </div>
    );
  }
  
}

export default App;

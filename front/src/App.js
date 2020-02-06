import React from 'react';
import './App.css';
import Home from './pages/HomePage/HomePage';
import Header from './components/Header/Header';
import GalleryContainer from './components/GalleryContainer/GalleryContainer';
import Footer from './components/Footer/Footer';
import EventsPage from './pages/EventsPage/EventsPage';

function App() {
  return (
    <div className="App">
      <EventsPage />
    </div>
  );
}

export default App;

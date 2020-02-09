import React from 'react';
import './App.css';
import Home from './pages/HomePage/HomePage';
import Events from './pages/EventsPage/EventsPage'
import Gallery from './pages/GalleryPage/GalleryPage'
import ContactPage from './pages/ContactUsPage/ContactUsPage'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
          <Route path="/events" component={Events} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/contact" component={ContactPage} />
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;

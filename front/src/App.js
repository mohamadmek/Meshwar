import React from 'react';
import './App.css';
import Home from './pages/HomePage/HomePage';
import Events from './pages/EventsPage/EventsPage'
import Gallery from './pages/GalleryPage/GalleryPage'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/events" component={Events} />
          <Route path="/gallery" component={Gallery} />
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;

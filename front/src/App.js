import React from 'react';
import './App.css';
import Home from './pages/HomePage/HomePage';
<<<<<<< HEAD
import Header from './components/Header/Header';
import GalleryContainer from './components/GalleryContainer/GalleryContainer';
<<<<<<< HEAD

import Slider from './components/Slider/Slider';
import EventCard from './components/UpComingEvents/EventCard/EventCard';
import Footer from './components/Footer/Footer';
import Home from './pages/HomePage/HomePage';
=======
import Footer from './components/Footer/Footer';
import EventsPage from './pages/EventsPage/EventsPage';
>>>>>>> b7056157545ae10a7b9b03a18629da303a41ccff

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <Header/>
      <GalleryContainer />
      <Home />
      
=======
      <EventsPage />
>>>>>>> b7056157545ae10a7b9b03a18629da303a41ccff
    </div>
  );
=======
import Events from './pages/EventsPage/EventsPage'
import Gallery from './pages/GalleryPage/GalleryPage'
import ContactPage from './pages/ContactUsPage/ContactUsPage'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import roccaMarina from './assets/images/rocca-marina.jpg';
import faraya from './assets/images/faraya.jpg';
import roadOfDeath from './assets/images/road-of-death.jpg';
import tripoli from './assets/images/tripoli.jpg';
import camping from './assets/images/camping.jpg';
import bbq from './assets/images/bbq.jpg';

class App extends React.Component {
   state = {
    events: [
      {
        title: "Road Of Death",
        location: "Tripoli | Bcharre | Cedars of God",
        date: "Feb 9, 2020 | 8AM - 6PM",
        price: "$25",
        remainingSeats: 10,
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam asperiores laboriosam quidem harum iusto saepe.',
        imageSource: roadOfDeath,
      },
      {
        title: "Faraya",
        location: "Jeita | Aajaltoun | Faraya",
        date: "Feb 12, 2020 | 8AM - 6PM",
        price: "$20",
        remainingSeats: 15,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia accusantium deleniti suscipit nobis sunt? Fuga reiciendis nisi velit quia?',
        imageSource: faraya,
      },
      {
        title: "Tripoli",
        location: "Batroun | Chekka | Tripoli",
        date: "March 16, 2020 | 8AM - 6PM",
        price: "$22",
        remainingSeats: 18,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia accusantium deleniti suscipit nobis sunt? Fuga reiciendis nisi velit quia?',
        imageSource: tripoli,
      },
      {
        title: "Camping by the fire",
        location: "Byblos Castle | Blat",
        date: "June 22, 2020 | 8AM - 6PM",
        price: "$30",
        remainingSeats: 5,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia accusantium deleniti suscipit nobis sunt? Fuga reiciendis nisi velit quia?',
        imageSource: camping,
      },
      {
        title: "Fun in the Sun",
        location: "Rocca Marina",
        date: "July 28, 2020 | 12AM - 6PM",
        price: "$25",
        remainingSeats: 11,
        description: '',
        imageSource: roccaMarina,
      },
      {
        title: "Bbq Fest",
        location: "Chahtoul Valley",
        date: "July 28, 2020 | 11AM - 11PM",
        price: "$40",
        remainingSeats: 16,
        description: 'Some random stuff',
        imageSource: bbq,
      }
    ],
    gallery: [faraya, tripoli, roccaMarina, roadOfDeath, camping, bbq]
  }

   
  
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact render={(props) => <Home {...props} events={this.state.events} miniGallery={this.state.gallery}/>}/>
            <Route path="/home" exact render={(props) => <Home {...props} events={this.state.events} miniGallery={this.state.gallery}/>} />
            <Route path="/events" render={(props) => <Events {...props} events={this.state.events} />}
            />
            <Route path="/gallery" render={(props) => <Gallery {...props} gallery={this.state.gallery}/>} />
            <Route path="/contact" component={ContactPage} />
          </Switch>
        </div>
      </Router>
    ); 
  }
>>>>>>> d9c55a116be808fccf8346bfacd9982509b510fc
}

export default App;

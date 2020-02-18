import React from 'react';
import './App.css';
import Home from './pages/HomePage/HomePage';
import Footer from './components/Footer/Footer';
import EventsPage from './pages/EventsPage/EventsPage';
import Events from './pages/EventsPage/EventsPage'
import Gallery from './pages/GalleryPage/GalleryPage'
import ContactPage from './pages/ContactUsPage/ContactUsPage'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'


class App extends React.Component {
   state = {

  }

   
  async componentDidMount(){
	const url = 'http://localhost:8080/events';
	const response = await fetch(url, {
	    method: 'GET',
	    headers: {'Content-Type': 'application/json'}
	})
	
	const data = await response.json();
	this.setState({events: data})
	console.log(this.state.events);
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
}

export default App;

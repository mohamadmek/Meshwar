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
  constructor(props){
    super(props);
    this.state = {
      events: [],
      gallery: [],
      error: ""
    }
  }


  getEvents = async () => {
    try{
      const response = await fetch("http://localhost:8080/events");
      const result = await response.json();
      if(result.success){
        this.setState({events: [...result.result], error: ""})
      } else {
        this.setState({error: result.message})
      }
    }catch(err){
      this.setState({error: err})
    }
  }
  
  getImages = async () => {
    try{
      const response = await fetch("http://localhost:8080/gallery")
      const result = await response.json();
      if(result.success){
        this.setState({gallery: [...result.result], error: ""})
      }else{
        this.setState({error: result.message})
      }
    }catch(err){
      this.setState({error: err})
    }
  }

    async componentDidMount(){
      this.getEvents()
      this.getImages()
    }

    componentWillReceiveProps(){
      this.getEvents();
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

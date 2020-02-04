import React, { Component } from 'react';
import './HowItWorks.css'


class HowItWorks extends Component {
  render() {
    return( 
      <div>
      
      <h1 id="kek" >Start your Meshwar</h1>
      
    
      <div className="works">

        <div className="step">
          <img className="icon" src="https://previews.123rf.com/images/dstarky/dstarky1709/dstarky170900364/87054795-premium-online-booking-icon-or-logo-in-line-style-high-quality-sign-and-symbol-on-a-white-background.jpg" alt=""></img>
          <h3>Book your Meshwar</h3>
          <p className="width" >Start by surfing through our events section in search for your desired trip. Once you have made your mind, register.</p>
        </div>

        
        <div className="step">
          <img className="icon" src="https://cdn1.iconfinder.com/data/icons/furniture-filled-1/64/Furniture-Filled_Couch-512.png" alt=""></img>
          <h3>Sit back</h3>
          <p className="width">Once you have completed the registration and read all the requirments, sit back and relax till the day of the trip awakens.</p>
        </div>
        <div className="step">
          <img className="icon" src="https://cdn4.iconfinder.com/data/icons/travel-ii-filled-line/2048/5501_-_Van-512.png" alt=""></img>
          <h3>Enoy your Meshwar</h3>
          <p className="width">Once the day finnaly comes, meet at the appointed destination and prepare for an adventure full of energy and excitment </p>
        </div>
        
      </div>
      </div>
      )
  }
    

}

export default HowItWorks;

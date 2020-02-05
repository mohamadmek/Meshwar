import React, { Component } from 'react';
import './HowItWorks.css'

class HowItWorks extends Component {
  render() {
    return( 
      <div>
      
      <h1 id="kek" >Start your Meshwar</h1>
      
    
      <div className="works">

        <div className="step">
           <i className="fa fa-ticket" style={{fontSize: '32px'}} aria-hidden="true"></i>

          <h3>Book your Meshwar</h3>
          <p className="width" >Start by surfing through our events section in search for your desired trip. Once you have made your mind, register.</p>
        </div>
        

        
        <div className="step">
        <i className="fa fa-child"  style={{fontSize: '32px'}} aria-hidden="true"></i>

          <h3> Sit back </h3>
          <p className="width">Once you have completed the registration and read all the requirments, sit back and relax till the day of the trip awakens.</p>
        </div>
        <div className="step">
        <i class="fa fa-bus" style={{fontSize: '32px'}} aria-hidden="true"></i>
          <h3>Enoy your Meshwar</h3>
          <p className="width">Once the day finnaly comes, meet at the appointed destination and prepare for an adventure full of energy and excitment </p>
        </div>
        
      </div>
      </div>
      )
  }
    

}

export default HowItWorks;

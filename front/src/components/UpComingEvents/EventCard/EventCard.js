import React, { Component } from 'react';
import './EventCard.css'
import styled from 'styled-components'
import Button from '../Button/Button'
import Article from '../Article/Article'
const EventCard = () => {
  
    return (
      <Article className="EventSection_m_mt10">
      <div className="EventCard_image">
        <div className="overlay"></div>
        <div className="EventCard_title">Road of Death</div>
      </div>
      <div className="EventCard_container">
        <div><i className="fa fa-map-marker EventCard_marker"></i>Tripoli| Bcahrre| Cedars Of God</div>
        <div className="EventCard_date"><i className="fa fa-calendar EventCard_calendar"></i> Feb 9,2020 | 8AM-6PM</div>
        <div className="EventCard_flex">
          <div><i className="fa fa-users EventCard_users"></i> Seats remaining:7
          |</div>
          <div>Price 28$</div>
        </div>
        <Button className="EventCard_info">More Info</Button>
        <Button>Register</Button>
      </div>
     </Article>
    )
      
  }

export default EventCard;

import React, { Component } from 'react';
import './EventCard.css'
import styled from 'styled-components'

const EventCard = () => {
  const Button = styled.button
  `
  padding: 10px 20px;
  background-color: #A8C2CA;
  margin-top: 20px;
  border-radius: 10px;
  text-decoration: none;
  font-weight: bold;
  &:hover {
    transition: all 0.2s linear;
    border-color: #A8C2CA;
    color: #fff;
  }
  `;
    return (
      <article>
      <div className="EventCard_image">
        <div className="EventCard_title">-Road of Death</div>
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
     </article>
    )
      
  }

export default EventCard;

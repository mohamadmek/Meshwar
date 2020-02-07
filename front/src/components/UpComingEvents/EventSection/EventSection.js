import React from 'react';
import EventCard from '../EventCard/EventCard'
import './EventSection.css'
import Button from '../../UpComingEvents/Button/Button'
import {Link} from "react-router-dom"
const EventSection = () => {
  return (
    <div>
      <h3 style={{ paddingBottom: "20px", borderBottom: "2px solid #A8C2CA",textAlign: "center",width:"300px", margin: "0 auto", marginTop: "30px" }}>Upcoming Events</h3>
      <section className="EventSection_Wrapper">
      <EventCard />
      <EventCard />
      <EventCard />
      </section>
      <div style={{textAlign: "center", marginTop: "20px" }}>
      <Button><Link to="/events">Show More</Link></Button>
      </div>
     
    </div>
  )
}

export default EventSection;
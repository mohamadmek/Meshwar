import React from 'react';
import EventCard from '../EventCard/EventCard'
import './EventSection.css'
import Button from '../../UpComingEvents/Button/Button'
const EventSection = () => {
  return (
    <div>
      <section className="EventSection_Wrapper">
      <EventCard />
      <EventCard />
      <EventCard />
      </section>
      <div style={{textAlign: "center", marginTop: "20px" }}>
      <Button>Show More</Button>
      </div>
     
    </div>
  )
}

export default EventSection;
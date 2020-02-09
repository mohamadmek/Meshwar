import React from 'react';
import EventCard from '../EventCard/EventCard'
import './EventSection.css'
import Button from '../../UpComingEvents/Button/Button'
import {Link} from "react-router-dom"
import faraya from '../../../assets/images/faraya.jpg';
import roadOfDeath from '../../../assets/images/road-of-death.jpg';
import tripoli from '../../../assets/images/tripoli.jpg';


class EventSection extends React.Component {
  state = {
    events: [
      {
        title: "Road Of Death",
        location: "Tripoli | Bcharre | Cedars of God",
        date: "Feb 9, 2020 | 8AM - 6PM",
        price: "$25",
        remainingSeats: 10,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia accusantium deleniti suscipit nobis sunt? Fuga reiciendis nisi velit quia?',
        imageSource: roadOfDeath
      },
      {
        title: "Faraya",
        location: "Jeita | Aajaltoun | Faraya",
        date: "Feb 12, 2020 | 8AM - 6PM",
        price: "$20",
        remainingSeats: 15,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia accusantium deleniti suscipit nobis sunt? Fuga reiciendis nisi velit quia?',
        imageSource: faraya 
      },
      {
        title: "Tripoli",
        location: "Batroun | Chekka | Tripoli",
        date: "March 16, 2020 | 8AM - 6PM",
        price: "$22",
        remainingSeats: 18,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia accusantium deleniti suscipit nobis sunt? Fuga reiciendis nisi velit quia?',
        imageSource: tripoli 
      }
    ]
  }
  render (){
   return (
      <div>
        <h3 style={{ paddingBottom: "20px", borderBottom: "2px solid #A8C2CA",textAlign: "center",width:"300px", margin: "0 auto", marginTop: "30px" }}>Upcoming Events</h3>
        <section className="EventSection_Wrapper">
          {
          this.state.events.map(event => {
              return <EventCard
                title={event.title} 
                location={event.location}
                date={event.date}
                price={event.price}
                remainingSeats={event.remainingSeats}
                description={event.description}
                src={event.imageSource}/>
            })
          }
        </section>
        <div style={{textAlign: "center", marginTop: "20px" }}>
        <Button><Link style={{textDecoration: "none", color: "#4a4a4a"}} to="/events">Show More</Link></Button>
        </div>
      </div>
    ) 
  }
  
}

export default EventSection;
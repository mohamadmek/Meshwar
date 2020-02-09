import React, { Component } from 'react';
import EventCard from '../../components/UpComingEvents/EventCard/EventCard';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer'
import './EventsPage.css';
import image from '../../assets/images/unnamed.jpg';
import roccaMarina from '../../assets/images/rocca-marina.jpg';
import faraya from '../../assets/images/faraya.jpg';
import roadOfDeath from '../../assets/images/road-of-death.jpg';
import tripoli from '../../assets/images/tripoli.jpg';
import camping from '../../assets/images/camping.jpg';
import bbq from '../../assets/images/bbq.jpg';

class EventsPage extends Component {
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
      },
      {
        title: "Camping by the fire",
        location: "Byblos Castle | Blat",
        date: "June 22, 2020 | 8AM - 6PM",
        price: "$30",
        remainingSeats: 5,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia accusantium deleniti suscipit nobis sunt? Fuga reiciendis nisi velit quia?',
        imageSource: camping 
      },
      {
        title: "Fun in the Sun",
        location: "Rocca Marina",
        date: "July 28, 2020 | 12AM - 6PM",
        price: "$25",
        remainingSeats: 11,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia accusantium deleniti suscipit nobis sunt? Fuga reiciendis nisi velit quia?',
        imageSource: roccaMarina 
      },
      {
        title: "Bbq Fest",
        location: "Chahtoul Valley",
        date: "July 28, 2020 | 11AM - 11PM",
        price: "$40",
        remainingSeats: 16,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia accusantium deleniti suscipit nobis sunt? Fuga reiciendis nisi velit quia?',
        imageSource: bbq 
      }
    ]
  }
  render() {
    
    return (
      <>
      <Header />
      <div className="eventsPage_wrapper">
        <h2 className="eventsPage_title">All Events</h2>
        <section className="eventsPage_cards">
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
      </div>
      <Footer />
      </>
    )
  }
}

export default EventsPage;

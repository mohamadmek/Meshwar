import React, { Component } from 'react';
import EventCard from '../../components/UpComingEvents/EventCard/EventCard';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer'
import './EventsPage.css';


class EventsPage extends Component {
   render() {
    return (
      <>
      <Header />
      <div className="eventsPage_wrapper">
        <h2 className="eventsPage_title">All Events</h2>
        <section className="eventsPage_cards">
          {
          this.props.events.map(event => {
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

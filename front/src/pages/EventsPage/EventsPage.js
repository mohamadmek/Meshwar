import React, { Component } from 'react';
import EventCard from '../../components/UpComingEvents/EventCard/EventCard';
import Header from '../../components/Header/Header';
import './EventsPage.css';

class EventsPage extends Component {
  render() {
    return (
      <>
      <Header />
      <div className="eventsPage_wrapper">
        <h2 className="eventsPage_title">All Events</h2>
        <section className="eventsPage_cards">
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
        </section>
      </div>
      </>
    )
  }
}

export default EventsPage;

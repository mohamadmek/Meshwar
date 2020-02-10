import React, { Component } from 'react';
import './EventCard.css'
import styled from 'styled-components'
import Button from '../Button/Button'
import Article from '../Article/Article'
import exit from '../../../assets/icons/exit.svg';


class EventCard extends Component {
  state = {
    show: false
  }

  toggleMoreInfo = () => {
    this.setState({show: !this.state.show});
    console.log(this.state.show);
  }


  render() {
    const {src, title, description, remainingSeats, date, location, price} = this.props;
    let moreInfo = null;


    if(this.state.show) {
      moreInfo = (
        <div className="EventCard_moreInfo">
          <img onClick={this.toggleMoreInfo} className="EventCard_exitIcon" src={exit} />
          <h3>Trip Info ({title})</h3>
          <hr style={{height: "2px", background: "#fff"}} />
          <p style={{textAlign: "left", marginTop: "30px"}}>{description}</p>
        </div>
      )
    }


     return (
       <>
      <Article className="EventSection_m_mt10">
      <div style={{
        background: `url(${src}) no-repeat center center/cover`,
        position: "relative",
        width: "100%",
        height: "200px",
        borderTopRightRadius: "30px",
        borderBottom: "6px solid #A8C2CA"
      }}> 
        <div className="overlay"></div>
        <div className="EventCard_title">{title}</div>
      </div>
      <div className="EventCard_container">
        <div><i className="fa fa-map-marker EventCard_marker"></i>{location}</div>
        <div className="EventCard_date"><i className="fa fa-calendar EventCard_calendar"></i>{date}</div>
        <div className="EventCard_flex">
          <div><i className="fa fa-users EventCard_users"></i>Seats remaining: {remainingSeats}
          |</div>
          <div>Price {price}</div>
        </div>
        <Button onClick={this.toggleMoreInfo} className="EventCard_info">More Info</Button>
        <Button>Register</Button>
      </div>
     </Article>
        {moreInfo}
    </>
    )
  }
 }

export default EventCard;

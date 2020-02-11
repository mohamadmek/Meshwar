import React, { Component } from 'react';
import './EventCard.css';
import Button from '../Button/Button'
import Article from '../Article/Article'
import exit from '../../../assets/icons/exit.svg';


class EventCard extends Component {
  state = {
    showMoreInfo: false,
    showRegister: false
  }

  toggleMoreInfo = () => {
    this.setState({showMoreInfo: !this.state.showMoreInfo});
  }

  toggleRegister = () => {
    this.setState({showRegister: !this.state.showRegister});
  }

  render() {
    const {src, title, description, remainingSeats, date, location, price} = this.props;
    let moreInfo = null;
    let register = null;


    if(this.state.showMoreInfo) {
      moreInfo = (
        <div className="EventCard_moreInfo">
          <img onClick={this.toggleMoreInfo} className="EventCard_exitIcon" src={exit} alt="mre"/>
          <h3>Trip Info ({title})</h3>
          <hr style={{height: "2px", background: "#fff"}} />
          <p style={{textAlign: "left", marginTop: "30px"}}>{description}</p>
        </div>
      )
    }

    if(this.state.showRegister) {
      register = (
        <div className="EventCard_register">
          <img onClick={this.toggleRegister} className="EventCard_exitIcon" src={exit} />
          <h3>Register for {title}</h3>
          <form>
            <div>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Your name..." required/>
            </div>
            <div>
              <label htmlFor="age">Age</label>
              <input type="number" id="age" placeholder="Your age..." />
            </div>
            <div>
              <label htmlFor="mobile">Mobile</label>
              <input type="text" id="mobile" placeholder="Your mobile..." required/>
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Your email..."/>
            </div>
            <div>
              <label htmlFor="address">Address</label>
              <input type="text" id="address" placeholder="Your Address..."/>
            </div>
            <button type="submit">Register</button>
          </form>
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
        <Button onClick={this.toggleRegister}>Register</Button>
      </div>
     </Article>
        {moreInfo}
        {register}
    </>
    )
  }
}
  export default EventCard;

 
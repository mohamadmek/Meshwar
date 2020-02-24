import React, { Component } from 'react';
import './EventCard.css';
import Button from '../Button/Button'
import Article from '../Article/Article'
import exit from '../../../assets/icons/exit.svg';


class EventCard extends Component {
  state = {
    registrations: [],
    registration: {
      name: "",
      age: "",
      mobile: "",
      email: "",
      address: ""
    },
    success: true,
    showMoreInfo: false,
    showRegister: false
  }

  createRegistration = async (e) => {
    e.preventDefault();
    try {
      const body = new FormData();
      body.append('event_id', this.props.id);
      body.append('name', this.state.registration.name);
      body.append('email', this.state.registration.email);
      body.append('age', this.state.registration.age);
      body.append('mobile', this.state.registration.mobile);
      body.append('address', this.state.registration.address);
      console.log(body)
      const response = await fetch('http://localhost:8080/addregistration', {
        method: `POST`,
        body: body
      });
      const result = await response.json();
      if(result.success){
        this.setState({registrations: result})
      }
    } catch(err) {
      throw new Error('Something went wrong...' + err)
    }
    this.toggleRegister();
  }

  changeHandler = (e) => {
    let registration = { ...this.state.registration };
    let field = e.target.name;
    registration[field] = e.target.value;
    this.setState({ registration });
  }



  toggleMoreInfo = () => {
    this.setState({ showMoreInfo: !this.state.showMoreInfo });
  }

  toggleRegister = () => {
    this.setState({ showRegister: !this.state.showRegister });
  }

  render() {
    const { src, title, description, remainingSeats, date, location, price } = this.props;
    console.log("title", this.props.id)
    let moreInfo = null;
    let register = null;


    if (this.state.showMoreInfo) {
      moreInfo = (
        <div className="EventCard_moreInfo">
          <img onClick={this.toggleMoreInfo} className="EventCard_exitIcon" src={exit} alt="exit" />
          <h3>Trip Info ({title})</h3>
          <hr style={{ height: "2px", background: "#fff" }} />
          <p style={{ textAlign: "left", marginTop: "30px" }}>{description}</p>
        </div>
      )
    }

    if (this.state.showRegister) {
      register = (
        <div className="EventCard_register">
          <img onClick={this.toggleRegister} className="EventCard_exitIcon" src={exit} alt="exit"/>
          <h3>Register for {title}</h3>
          <form onSubmit={(e) => this.createRegistration(e)}>
            <div>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" onChange={this.changeHandler} placeholder="Your name..." required />
            </div>
            <div>
              <label htmlFor="age">Age</label>
              <input type="number" name="age" onChange={this.changeHandler} placeholder="Your age..." />
            </div>
            <div>
              <label htmlFor="mobile">Mobile</label>
              <input type="text" name="mobile" onChange={this.changeHandler} placeholder="Your mobile..." required />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" onChange={this.changeHandler} placeholder="Your email..." />
            </div>
            <div>
              <label htmlFor="address">Address</label>
              <input type="text" name="address" onChange={this.changeHandler} placeholder="Your Address..." />
            </div>
            <button type="submit">Register</button>
          </form>
        </div>
      )
    }

    const status = (
      <div class="EventCard_status" >Registered successfully!</div>
    )

    return (
      <>
        <Article className="EventSection_m_mt10">
          <div style={{
            background: `url('http://localhost:8080/images/${src}') no-repeat center center/cover`,
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
            <div className="wrapper">
              <div><i className="fa fa-map-marker EventCard_marker"></i>{location}</div>
              <div className="EventCard_date"><i className="fa fa-calendar EventCard_calendar"></i>{date}</div>
              <div className="EventCard_seats"><i className="fa fa-users"></i>Seats remaining: <strong>{remainingSeats}</strong></div>
              <div className="EventCard_price"><i className="fa fa-dollar"></i>Price: <strong>{price}</strong></div>
            </div>
            <Button onClick={this.toggleMoreInfo} className="EventCard_info">More Info</Button>
            <Button onClick={this.toggleRegister}>Register</Button>
          </div>
          {status}
        </Article>
        {moreInfo}
        {register}
      </>
    )
  }
}
export default EventCard;


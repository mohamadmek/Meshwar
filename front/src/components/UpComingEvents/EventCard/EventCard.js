import React, { Component } from 'react';
import './EventCard.css'
import styled from 'styled-components'
import Button from '../Button/Button'
import Article from '../Article/Article'
const EventCard = () => {
  
    return (
      <Article className="EventSection_m_mt10">
      <div className="EventCard_image">
        <div className="overlay"></div>
        <div className="EventCard_title">Road of Death</div>
      </div>
      <div className="EventCard_container">
        <div><i className="fa fa-map-marker EventCard_marker"></i>Tripoli| Bcahrre| Cedars Of God</div>
        <div className="EventCard_date"><i className="fa fa-calendar EventCard_calendar"></i> Feb 9,2020 | 8AM-6PM</div>
        <div className="EventCard_flex">
          <div><i className="fa fa-users EventCard_users"></i> Seats remaining:7
          |</div>
          <div>Price 28$</div>
        </div>
        <Button className="EventCard_info" data-toggle="modal" data-target="#moreInfoModal">More Info</Button>
        <Button type="button" class="btn btn-primary" data-toggle="modal" data-target="#registerModal">
  Register
        </Button>

        {/* REGISTRATION MODAL */}
              </div>
              <div class="modal fade" id="registerModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Registration</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form action="#">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" class="form-control" id="name" placeholder="Your Name"/>
                    <label htmlFor="mobile">Mobile</label>
                    <input type="text" class="form-control" id="mobile" placeholder="Your Number"/>
                    <label htmlFor="email">Email</label>
                    <input type="email" class="form-control" id="email" placeholder="Your email"/>
                    <label htmlFor="age">Age</label>
                    <input type="number" class="form-control" id="age" placeholder="Your age"/>
                    <label htmlFor="area">Area</label>
                    <input type="text" class="form-control" id="area" placeholder="Your Area"/>
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" style={{backgroundColor: "#A8C2CA", borderColor: "#A8C2CA"}} class="btn btn-primary">Register</button>
              </div>
            </div>
          </div>
        </div><div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                ...
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
        {/* MORE INFO MODAL */}
          <div class="modal fade" id="moreInfoModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">More Info</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, excepturi accusantium aut doloremque iusto autem alias quibusdam fuga architecto error recusandae dolor, facilis saepe ducimus dolores! Dolores obcaecati molestias enim!
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
     </Article>
    )
      
  }

export default EventCard;

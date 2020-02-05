import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  
  render() {
   
    const menu = document.querySelector('.header_navlist');
    const burger = document.querySelector('.line');
    burger.addEventListener('click', function() {
      menu.classList.toggle('header_navlist_active ')
    })
    return (
      <header>
        <nav>
          <div id="hero">
            <h1>MESHWAR</h1>
          </div>
          <ul className="header_navlist">
            <li><a className="header_navlink" href="#">Events</a></li>
            <li><a className="header_navlink" href="#">Gallery</a></li>
            <li><a className="header_navlink" href="#">Contact Us</a></li>
          </ul>
          <div className="header_burgerWrapper">
          <span className="line">&nbsp;</span>
          <span className="line">&nbsp;</span>
          <span className="line">&nbsp;</span>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;

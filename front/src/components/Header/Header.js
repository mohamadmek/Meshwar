import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
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
        </nav>
      </header>
    );
  }
}

export default Header;

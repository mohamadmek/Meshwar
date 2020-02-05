import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  state={
    hide:false,
    status: "header_navlist"
  }

  handleClick = ()=>{
    this.setState({ hide: !this.state.hide });
    if(this.state.hide) {
      this.setState({status: "header_navlist"});
    } else {
      this.setState({status: "header_navlist hide"});
    }
  }


  render() {
    return (
      <header>
        <div onClick={this.handleClick} className="burger">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
        <nav>
          <div id="hero">
            <h1>MESHWAR</h1>
          </div>
          <ul className={this.state.status}>  
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
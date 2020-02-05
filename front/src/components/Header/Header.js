import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  state={
    hide:false,
    status: "header_navlist",
    nav: "elevate"
  }

  handleClick = ()=>{
    this.setState({ hide: !this.state.hide });
    console.log(this.state.hide);
    if(this.state.hide) {
      this.setState({status: "header_navlist", nav: this.state.nav});
    } else {
      this.setState({status: "header_navlist hide", nav: ""});
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
        <nav className={this.state.nav}>
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
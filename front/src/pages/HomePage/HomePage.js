import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Slider from '../../components/Slider/Slider';

class HomePage extends Component {
  render() {
    return (
      <main className="wrapper">
        <Header />
        <Slider />
        <Footer />
      </main>
    );
  }
}

export default HomePage;

import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Slider from '../../components/Slider/Slider';
import Form from '../../components/Form/Form';
class HomePage extends Component {
  render() {
    return (
      <main className="wrapper">
        <Header />
        <Form />
      </main>
    );
  }
}

export default HomePage;

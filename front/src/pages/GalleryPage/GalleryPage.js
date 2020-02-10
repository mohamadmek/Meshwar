import React, { Component } from 'react';
import GalleryContainer from '../../components/GalleryContainer/GalleryContainer'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
class GalleryPage extends Component {
  render() {
    return (
      <>
      <Header />
      <GalleryContainer gallery={this.props && this.props.gallery}/>
      <Footer />
      </>
    )
    
  }
}

export default GalleryPage;

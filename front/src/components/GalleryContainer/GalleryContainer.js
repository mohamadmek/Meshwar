import React, { Component } from 'react';
import './GalleryContainer.css';
import GalleryPic from './GalleryPic/GalleryPic'
class GalleryContainer extends Component {
  render() {
    return( 
      <div>
        <h1 id="gallery_h1">Our Photos</h1>
      <div className="gallery_container">
      <GalleryPic />
      <GalleryPic />
      <GalleryPic />
      <GalleryPic />
      <GalleryPic />
      <GalleryPic />
      <GalleryPic />
      <GalleryPic />
      <GalleryPic />
      </div>
      </div>
    )
}

}
export default GalleryContainer;

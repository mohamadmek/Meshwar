import React, { Component } from 'react';
import './GalleryContainer.css';
import GalleryPic from './GalleryPic/GalleryPic'
const GalleryContainer = (props) => {
    return( 
      <div>
        <h1 id="gallery_h1">Our Photos</h1>
      <div className="gallery_container">
        {props.gallery && props.gallery.map(image => {
          return <GalleryPic src={image} />
        })}        
      </div>
      </div>
    )
}

export default GalleryContainer;

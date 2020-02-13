import React from 'react';
import './GalleryPic.css'
const GalleryPic = (props) => {
  return (
    <div>
      <div className="gallery_box">
          <img className="gallery_pic" src={props.src} alt="asd"></img> 
        </div>
    </div>
  );
}

export default GalleryPic;
 
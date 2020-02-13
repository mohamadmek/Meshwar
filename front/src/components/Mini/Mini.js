import React from 'react';
import './Mini.css'
const Mini = (props) => {
  return (
    <section className="MiniGallery_section">
      <div className="MiniGallery_img" style={{backgroundImage: `url(${props.src})`}}></div>
    </section>
  );
}

export default Mini;

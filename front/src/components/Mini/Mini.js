import React from 'react';
import './Mini.css'
import img from '../../assets/images/3.jpg'
const Mini = () => {
  return (
    <section className="MiniGallery_section">
      <div className="MiniGallery_img" style={{backgroundImage: "url("+img+")"}}></div>
      <div className="MiniGallery_img" style={{backgroundImage: "url("+img+")"}}></div>
      <div className="MiniGallery_img" style={{backgroundImage: "url("+img+")"}}></div>
      <div className="MiniGallery_img" style={{backgroundImage: "url("+img+")"}}></div>
      <div className="MiniGallery_img" style={{backgroundImage: "url("+img+")"}}></div>
      <div className="MiniGallery_img" style={{backgroundImage: "url("+img+")"}}></div>
      <div className="MiniGallery_img" style={{backgroundImage: "url("+img+")"}}></div>
    </section>
  );
}

export default Mini;

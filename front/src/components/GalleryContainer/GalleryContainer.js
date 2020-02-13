import React from 'react';
import './GalleryContainer.css';
import GalleryPic from './GalleryPic/GalleryPic'
const GalleryContainer = (props) => {
    return( 
      <div>
        <h1 id="gallery_h1">Our Photos</h1>
      <div className="gallery_container">
<<<<<<< HEAD
      
        <div className="gallery_box">
          <img className="gallery_pic" src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"></img> 
        </div>

        <div className="gallery_box">
              <img className="gallery_pic" src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"></img> 
        </div>

          <div className="gallery_box">
              <img className="gallery_pic" src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"></img> 
        </div>
        <div className="gallery_box">
              <img className="gallery_pic" src="https://images.unsplash.com/photo-1456428199391-a3b1cb5e93ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"></img> 
        </div>
        <div className="gallery_box">
              <img className="gallery_pic" src="https://images.unsplash.com/photo-1478059299873-f047d8c5fe1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"></img> 
        </div>
        <div className="gallery_box">
              <img className="gallery_pic" src="https://images.unsplash.com/photo-1464278533981-50106e6176b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"></img> 
        </div>
        <div className="gallery_box">
              <img className="gallery_pic" src="https://images.unsplash.com/photo-1580843527742-c2ba288add67?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"></img> 
        </div>
        <div className="gallery_box">
              <img className="gallery_pic" src="https://images.unsplash.com/photo-1445363692815-ebcd599f7621?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"></img> 
        </div>
        <div className="gallery_box">
              <img className="gallery_pic" src="https://images.unsplash.com/photo-1508913449378-01b9b8174e46?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"></img> 
        </div>
        <div className="gallery_box">
              <img className="gallery_pic" src="https://images.unsplash.com/photo-1472791108553-c9405341e398?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"></img> 
        </div>
        <div className="gallery_box">
              <img className="gallery_pic" src="https://images.unsplash.com/photo-1472791108553-c9405341e398?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"></img> 
        </div>
        
        <div className="gallery_box">
              <img className="gallery_pic" src="https://www.infoplease.com/sites/infoplease.com/files/inline-images/mount_everest_650.jpg"></img> 
        </div>
        <div className="gallery_box">
              <img className="gallery_pic" src="https://www.infoplease.com/sites/infoplease.com/files/inline-images/mount_everest_650.jpg"></img> 
        </div>
        
        <div className="gallery_box">
              <img className="gallery_pic" src="https://cdn.cnn.com/cnnnext/dam/assets/170407220921-07-iconic-mountains-pitons-restricted.jpg"></img> 
        </div>
        <div className="gallery_box">
              <img className="gallery_pic" src="https://stillmed.olympic.org/media/Images/OlympicOrg/News/2019/12/11/2019-12-11-mountain-day-featured-01.jpg"></img> 
        </div>
        <div className="gallery_box">
              <img className="gallery_pic" src="https://www.theuiaa.org/wp-content/uploads/2017/12/2018_banner.jpg"></img> 
        </div>
        <div className="gallery_box">
              <img className="gallery_pic" src="https://s3.amazonaws.com/images.gearjunkie.com/uploads/2018/05/matterhorn-3x2.jpg"></img> 
        </div>
        <div className="gallery_box">
              <img className="gallery_pic" src="https://images.unsplash.com/photo-1447749506926-b897c10cffc1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"></img> 
        </div>

=======
        {props.gallery && props.gallery.map(image => {
          console.log(image)
          return <GalleryPic src={image} />
        })}        
>>>>>>> d9c55a116be808fccf8346bfacd9982509b510fc
      </div>
      </div>
    )
}

export default GalleryContainer;

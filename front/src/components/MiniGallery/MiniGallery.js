<<<<<<< HEAD
import React, {Component} from 'react';
import './MiniGallery.css'
import Mini from '../Mini/Mini'
class MiniGallery extends Component{
  //     randNB = () => {
  //      const arrRand = []
  //      while (arrRand.length < 6){ 
	//  let rand = Math.floor(Math.random()*this.props.src.length)
	//  if(arrRand.includes(rand)){
	//    rand = Math.floor(Math.random()*this.props.src.length)
	//  } else {
	//    arrRand.push(rand)
	//  }
  //      }
  //      // console.log(arrRand)
  //      // // return(<Mini src={this.props.src[2]}/>)
  //      //   arrRand.forEach(index => {
  //      //     console.log(index);
  //      //     return <Mini src={this.props.src[1]} />
  //      // })
  //      return arrRand;
  //    }

  // looping = () => {
  //   for(let i=0; i<this.props.src.length; i++) {
  //     return this.props.src[]
  //   }
  // }
  
    render(){
      // const random = this.randNB();
      return (
	  <div>
	  {/* <section className="MiniGallery_section">
	       {random.map(index => {
		return <Mini src={this.props.src[index]} />
	       })}
	       
	      </section>   */}
	  </div>
      )
    }
    
   

    
  
=======
import React, { Component } from "react";
import "./MiniGallery.css";
import Mini from "../Mini/Mini";
class MiniGallery extends Component {
  randNB = () => {
    const arrRand = [];
    if(this.props.src.length > 0) {
      while (arrRand.length < 5) {
        let rand = Math.floor(Math.random() * this.props.src.length);
        if (arrRand.includes(rand)) {
          rand = Math.floor(Math.random() * this.props.src.length);
        } else {
          arrRand.push(rand);
        }
      }
    } 
    return arrRand;
  };
>>>>>>> d81d6083e7050e0e5b1bb8eaa4cbad1d64d0f8f8

  render() {
    const random = this.randNB();
    return (
      <div>
        <section className="MiniGallery_section">
          {random.map(index => {
            return <Mini src={this.props.src[index]} />;
          })}
        </section>
      </div>
    );
  }
}

export default MiniGallery;

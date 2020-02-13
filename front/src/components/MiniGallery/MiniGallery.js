import React, {Component} from 'react';
import './MiniGallery.css'
import Mini from '../Mini/Mini'
class MiniGallery extends Component{
   randNB = () => {
    const arrRand = []
    while (arrRand.length < 6){ 
      let rand = Math.floor(Math.random()*this.props.src.length)
      if(arrRand.includes(rand)){
        rand = Math.floor(Math.random()*this.props.src.length)
      } else {
        arrRand.push(rand)
      }
    }
    // console.log(arrRand)
    // // return(<Mini src={this.props.src[2]}/>)
    //   arrRand.forEach(index => {
    //     console.log(index);
    //     return <Mini src={this.props.src[1]} />
    // })
    return arrRand;
  }

  // looping = () => {
  //   for(let i=0; i<this.props.src.length; i++) {
  //     return this.props.src[]
  //   }
  // }
  
    render(){
      const random = this.randNB();
      return (
        <div>
          <section className="MiniGallery_section">
           {random.map(index => {
            return <Mini src={this.props.src[index]} />
           })}
           
          </section>  
        </div>
      )
    }
    
   

    
  

}

export default MiniGallery;

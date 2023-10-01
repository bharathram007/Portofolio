import "./Heroimg2.css"
import React  from 'react'

const Heroimg2 =(props)=>  {
  
        return (
            <div className="hero">
            <div className="mask2">
            <img className="into-img" src={props.image} alt="Introimg" />
            </div>
            <div className="content">
                <h1>{props.text}</h1>
            </div>
        </div>
  /*
            <div className="hero-img">
              <div className="heading">
                  <h1>{this.props.heading}</h1>
                  <p>{this.props.text}</p>
              </div>
             
            </div>
     */       
            )
    }
  


export default Heroimg2
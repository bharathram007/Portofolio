import "./heroimg.css";
import React from 'react';
import {Link} from "react-router-dom";
const Heroimg = (props) => {
  return (
    <div className="hero">
        <div className="mask">
        <img className="into-img" src={props.image} alt="Introimg" />
        </div>
        <div className="content">
            <span >BHARATH RAM</span>
            <h1>Web Developer.</h1>
            <div>
                <Link to ="/Project" className="btn">Projects</Link>
                <Link to ="/About" className="btn btn-light">About</Link>
            </div>
        </div>
    </div>
  )
}

export default Heroimg
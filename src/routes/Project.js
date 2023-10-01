import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from '../components/Card';
import Heroimg2 from '../components/Heroimg2';
import pic from '../assets/pic.jpeg';
const Project = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2 text="My Projects" image={pic}/>
      <Card/>
      <Footer/>
    </div>
  )
}

export default Project
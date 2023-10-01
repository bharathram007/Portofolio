import React from 'react'
import Navbar from '../components/Navbar';
import Heroimg from '../components/Heroimg';
import Footer from '../components/Footer';
import pic from "../assets/pic.jpeg";
const Home = () => {
  return (
    <div>
        <Navbar/>
        <Heroimg image={pic}/>
        <Footer/>
    </div>
  )
}

export default Home 
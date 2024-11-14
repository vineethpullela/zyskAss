import './App.css';
import React from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Features from './components/Features';
import Testimonial from './components/Testimonial';
import FeaturesCard from './components/FeaturesCard';
import Faq from './components/Faq';
import OurBlogs from './components/OurBlogs';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';

const App = () => {
  return (
    <div><Navbar/>
    <Home/>
    <Features/>
    <Testimonial/>
    <FeaturesCard/>
    <Faq/>
    <OurBlogs/>
    <CtaSection/>
    <Footer/>
    </div>
  )
}


export default App;
/*

    
    
   
*/
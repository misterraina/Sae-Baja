import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/hero/Hero'
import Features from './components/features1/Features'
import Cta from './components/cta/Cta'
import Features2 from './components/features2/Features2'
import Testimonial from './components/testimonial/Testimonial'
import Steps from './components/steps/Steps'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import ImageSlider from './components/extra/Extra'


function App() {
  const [count, setCount] = useState(0)

  const images = [
    'https://via.placeholder.com/800x400?text=Slide+1',
    'https://via.placeholder.com/800x400?text=Slide+2',
    'https://via.placeholder.com/800x400?text=Slide+3',
  ];

  return (
   <div>
    <Navbar/>
    <Hero/>
    <Features/>
    <Cta/>
    <Features2/>
    <Steps/>
    <Testimonial/>
    <Contact/>
    {/* <ImageSlider images={images} interval={5000} /> */}
    <Footer/>
   </div>
  )
}

export default App

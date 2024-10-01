import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Cta from './components/cta/Cta'
import Features2 from './components/features2/Features2'
import Testimonial from './components/testimonial/Testimonial'
import Steps from './components/steps/Steps'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Featuress from './components/features1/Features1'
import Photos from './components/photos/Photos'


function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const images = [
    'https://via.placeholder.com/800x400?text=Slide+1',
    'https://via.placeholder.com/800x400?text=Slide+2',
    'https://via.placeholder.com/800x400?text=Slide+3',
  ];

  return (
   <div>
    <Navbar/>
    <Hero/>
    <Featuress/>
    <Cta/>
    <Features2/>
    <Steps/>
    <Testimonial/>
    <Photos/>
    <Contact/>
    <Footer/>
   </div>
  )
}

export default App

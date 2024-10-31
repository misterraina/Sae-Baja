import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import VehicleSpecs from './page/VehicleSpecs';
import Team from './page/Team';


function App() {

  return (
    <Router>
    <div>
      {/* Navigation (always displayed) */}
      <Navbar />

      {/* Define Routes */}
      <Routes>
        {/* Home route */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Featuress />
              <Cta />
              <Features2 />
              <div className="parallax">
              <Steps />
              <Testimonial />
              </div>
              <Photos />
              <Contact />
              <Footer />
            </>
          }
        />

        {/* Details route */}
        <Route path="/details" element={<VehicleSpecs />} />

        <Route path="/team" element={<Team/>} />
      </Routes>
    </div>
  </Router>
  )
}

export default App

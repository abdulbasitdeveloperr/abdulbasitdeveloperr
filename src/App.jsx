
import React from 'react'
import Header from './components/header/header'
import HeroSection from './components/heroSection/HeroSection'
import './App.css'
import AboutMe from './components/aboutMe/AboutMe'

const App = () => {
  return (
    <div>
      <Header />
      <div className='main-component-wrapper'>
        <HeroSection />
        <AboutMe />
        
      </div>
    </div>
  )
}

export default App
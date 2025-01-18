
import React from 'react'
import Header from './components/Header/header'
import HeroSection from './components/HeroSection/heroSection'
import './App.css'
import AboutMe from './components/AboutMe/aboutMe'

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
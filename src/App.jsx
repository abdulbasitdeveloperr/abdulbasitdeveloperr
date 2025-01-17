
import React from 'react'
import Header from './components/header/Header'
import HeroSection from './components/heroSection/HeroSection'
// import AboutMe from './components/about/aboutme'
import './App.css'

const App = () => {
  return (
    <div>

      <Header />
      <div className='main-component-wrapper'>
        <HeroSection />
      </div>
    </div>
  )
}

export default App
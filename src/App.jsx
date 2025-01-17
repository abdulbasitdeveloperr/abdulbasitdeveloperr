// import React from 'react'
// import Header from './components/header/Header'
// import HeroSection from './components/heroSection/HeroSection'
// import './App.css'

// const App = () => {
//   return (
//     <div>
//       {/* <h1>abdul basit</h1> */}
//       <Header />
//       <div className='main-components-wrapper'>

//         <HeroSection />
//       </div>
//     </div>
//   )
// }

// export default App;
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
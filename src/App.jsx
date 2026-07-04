import React from 'react'
import Hero from './components/Hero/Hero.jsx'
import ThreeDModule from './components/ThreeDModule/ThreeDModule.jsx'
import PhotographyModule from './components/PhotographyModule/PhotographyModule.jsx'
import UIModule from './components/UIModule/UIModule.jsx'
import ContactModule from './components/ContactModule/ContactModule.jsx'
import './App.css'

function App() {
  return (
    <div className="app">
      <Hero />
      <ThreeDModule />
      <PhotographyModule />
      <UIModule />
      <ContactModule />
    </div>
  )
}

export default App

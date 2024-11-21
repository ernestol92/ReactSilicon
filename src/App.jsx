
import './App.css'
import React from 'react'
import Hero from './components/hero'
import BrandContainer from './components/BrandContainer'
import AppFeatures from './components/AppFeatures'
import HowDoesItWork from './components/HowDoesItWork'
import MakeMoney from './components/MakeMoney'
import Testimonies from './components/Testimonies'
import FAQ from './components/FAQ'
import Subscribe from './components/Subscribe'
import Footer from './components/Footer'
import Contacts from './components/Contacts'
import Navbar from './components/Navbar'

const App = () => {
  return (
      <div>
        <header className='hero'>
          <Navbar/>
          <Hero/>
        </header>
        <BrandContainer/>
        <AppFeatures/>
        <HowDoesItWork/>
        <MakeMoney/>
        <Testimonies/>
        <FAQ/>
        <Subscribe/>
        <Footer/>
      </div>
  )
}

export default App

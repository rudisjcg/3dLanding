
import './App.css'
import React from 'react'
import './index.css'
import DesignSection from './sections/DesignSection'
import DisplaySection from './sections/DisplaySection'
import HeroSection from './sections/HeroSection'
import Quote from './sections/Quote'
import { GlobalStyle } from './styles/GlobalStyle'
import ProcessorSection from './sections/ProcessorSection'
import BatterySection from './sections/BatterySection'
import { ColorContextProvider } from './context/ColorContext'
import ColorSection from './sections/ColorSection'
import CamaraSection from './sections/CamaraSection'
import PricingSection from './sections/PricingSection'
import PhoneModel from './sections/PhoneModel'


function App() {

  return (
    <>
      <GlobalStyle />
      <Quote />
      <PhoneModel />
      <HeroSection />
      <DesignSection />
      <DisplaySection />
      <ProcessorSection />
      <BatterySection />
      <ColorContextProvider>
        <ColorSection />
        <CamaraSection />
        <PricingSection />
      </ColorContextProvider>
    </>
  )
}

export default App

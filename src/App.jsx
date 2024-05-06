import React from 'react'
import Initial from './components/Initial'
import Features from './components/Features'
import Benefits from './components/Benefits'
import LifeInsurance from './components/LifeInsurance'
import Customers from './components/Customers'
import Footer from './components/Footer'
import Nav from './components/Nav'

const App = () => {

  return (
    <>
      <Nav />
      <div className='max-w-7xl mx-auto pt-20 px-6'>
      <Initial />
      <Features />
      <Benefits />
      <LifeInsurance />
      <Customers />
      <Footer />
      </div>
    </>
  )
}

export default App

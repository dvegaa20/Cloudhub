import React from 'react'

import { Blog, Clients, Features, Footer, Funcionality, Hero, Hero2 } from './containers'
import { Actions, Cards, Navbar } from './components'
import './App.css'

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <div className=''> 
        <Hero />
      </div>
      <Clients />
      <div className=''>
        <Features />
      </div>
      <div className=''>
        <Funcionality />
      </div>
      <Blog />
      <div className=''>
        <Hero2 />
      </div>
      <Footer />
    </div>
  )
}

export default App
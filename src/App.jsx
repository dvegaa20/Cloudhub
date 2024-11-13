import React from 'react'

import { Blog, Clients, Features, Footer, Funcionality, Hero, Hero2 } from './containers'
import { Cards, Dscgcard, Navbar } from './components'
import './App.css'

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Hero />
      <Clients />
      <Features />
      <Funcionality />
      <Blog />
      <Hero2 />
      <Footer />
    </div>
  )
}

export default App
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Home from './pages/Home'
import Benefit from './pages/Benefit'
import Localities from './pages/Localities'


function App() {
  

  return (

    <div>
      <Home/>
      <Benefit/>
      <Localities/>
    </div>

  )
}

export default App

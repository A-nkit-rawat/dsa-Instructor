import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
// import Box from './components/Box'
import Boxwrapper from './components/Boxwrapper'
import Test from './components/Test.jsx'

function App() {
  return (
    <>
    <div>
        <Header appName={"DSA Instructor"}></Header>
        
    </div>
    <div>
      
        <Boxwrapper></Boxwrapper>
    </div>

    </>
    // <Test></Test>
    

    
  )
}

export default App

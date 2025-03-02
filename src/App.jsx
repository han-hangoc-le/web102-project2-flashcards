import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Flipcard from './components/Flipcard.jsx'


function App() {

  return (
    <>  
      <Header/>
      <div className='cardContainer'>
        <Flipcard/>
      </div>
      <div className='buttonsGroup'>
        <button>Back</button>
        <button>Next</button>
      </div>
      
    </>
  )
}

export default App

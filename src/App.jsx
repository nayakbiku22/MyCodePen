import { useState } from 'react'
import Home from './components/Home'
import Header from './components/Header'
import DataContext from './context/DataContext'

function App() {
  

  return (
    <DataContext>
       <Header/>
      <Home/>
    </DataContext>
    
  )
}

export default App

import React, { useState } from 'react'
import { createContext } from 'react'
export const AppContext=createContext()
const DataContext = ({children}) => {
    const [HTML,setHTML]=useState('')
    const [CSS,setCSS]=useState('')
    const [JS,setJS]=useState('')
    const value={
        HTML,CSS,JS,setHTML,setCSS,setJS
    }
  return (
    <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
  )
}

export default DataContext

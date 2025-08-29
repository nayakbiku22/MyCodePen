import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/DataContext'
const Result = () => {
    const {HTML,CSS,JS}=useContext(AppContext)
    const [src,setSrc]=useState('')
    const code=`
    <html>
       <body>${HTML}</body>
       <style>${CSS}</style>
       <script>${JS}<\/script>
       
    </html>
    `
    useEffect(()=>{
       const timeOut= setTimeout(()=>{
            setSrc(code)
        },1000)
        return ()=>clearTimeout(timeOut)
    },[HTML,CSS,JS])
  return (
    <div className='w-full h-screen bg-white '>
      <iframe
        srcDoc={src}
        title='result'
        sandbox='allow-scripts'
        className='w-full h-full'
        />
      
    </div>
  )
}

export default Result

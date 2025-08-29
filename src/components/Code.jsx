import React, { useContext } from 'react'
import Editor from './Editor'
import { AppContext } from '../context/DataContext'
const Code = () => {
    const {HTML,CSS,JS,setHTML,setCSS,setJS}=useContext(AppContext)
  return (
    <div className='flex flex-row pb-4 text-white bg-slate-950'>
      <Editor heading="HTML" value={HTML} onChange={setHTML}/>
      <Editor heading="CSS" value={CSS} onChange={setCSS}/>
      <Editor heading="JavaScript" value={JS} onChange={setJS}/>
    </div>
  )
}

export default Code

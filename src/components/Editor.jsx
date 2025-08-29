import React, { useState }  from 'react'
import { MdLightMode } from 'react-icons/md';
import { MdDarkMode } from 'react-icons/md';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { html } from '@codemirror/lang-html';
import { css } from '@codemirror/lang-css';

const Editor = ({ heading,value,onChange }) => {
    const [theme,setTheme]=useState("dark")
    let extensions=[]
    if(heading=="HTML")extensions=[html()]
    if(heading=="CSS")extensions=[css()]
    if(heading=="JavaScript")extensions=[javascript()]
    const handleChange=(value)=>{
        onChange(value)
    }
    const handleTheme=()=>{
        if(theme==="dark")setTheme("light")
        else if(theme==="light")setTheme("dark")
    }
    return (
        <div className='my-3 ml-3 rounded-md h-80 w-[32vw] bg-slate-900 pb-4 '>
            <div className='flex flex-row w-full h-auto '>
                <div className='w-auto h-auto px-2 py-1 rounded-md bg-slate-900'>
                    {
                        heading == "HTML" ? <span className='px-2 py-[1px] bg-red-500 rounded-md text-center '>/</span> : heading == "CSS" ? <span className='px-2 py-[1px] bg-cyan-500 rounded-md text-center'>*</span> : <span className=' px-[6px] py-[1px] bg-yellow-500 rounded-md '>()</span>
                    }

                    <span className='ml-2 text-md'>{heading}</span>
                </div>
                <div className='flex items-center justify-end w-full pr-2 bg-black ' >
                    {
                        theme==="dark"? <span onClick={handleTheme} className='px-1 rounded-md py-[2px] bg-slate-700 hover:cursor-pointer'><MdLightMode /></span>:
                        <span onClick={handleTheme} className='px-1 rounded-md py-[2px] bg-slate-700 hover:cursor-pointer'><MdDarkMode /></span>
                    }
                   
                </div>
            </div>
            <CodeMirror
                value={value}
                className={theme==="light"?'text-black':''}
                height="300px"
                theme={theme}
                extensions={extensions}
                onChange={(value)=>handleChange(value)}
            />
        </div>
    )
}

export default Editor

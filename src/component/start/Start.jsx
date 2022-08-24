import React from 'react'
import "./start.css"
import {useNavigate} from "react-router-dom"

export default function Start() {
    const navigator = useNavigate()
    const handlesubmit= ()=>{
        navigator("/Quiz")
    }
  return (
    <div className='start'>
        <div className="start-title">
            Are You ready for Challenges
            
        </div>
        <button className="start-btn" onClick={()=>handlesubmit()} >Start now</button>
    </div>
  )
}

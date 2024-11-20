// import React, { useEffect,useState } from 'react'
import { About } from '../About/About'
import { Resume } from '../Resume/Resume'
import { Contact } from '../Contact/Contact'
import { Portfolio } from '../Portfolio/Portfolio'
import { HeaderMain } from '../HeaderMain/HeaderMain'
import { Route, Routes } from 'react-router-dom'
import './Main.scss'
import { Language } from '../Language/Language'
import  DarkMode  from '../DarkMode/DarkMode'





export const Main = (props) => {
  // const [time,setTime]=useState(new Date())
  // useEffect(()=>{
  //   setInterval(()=>setTime(new Date()),1000)
  // },[])
  // console.log(time);
  return (
    <>
    <div className='container'>
      <div className='container_bar'>
      <Language/>
        <div className='container_darkMode'>
          <DarkMode/>
        </div>
        {/* <div className='container_time'> 
          <h2>{time.toLocaleDateString()}</h2>
          <h3>{time.toLocaleTimeString()}</h3>
        </div> */}
      </div>
       <div className='box'style={{transform:`rotateY(${props.active * 0}deg)`}}>
        <Routes basename="arturcv">
       <Route path="/" element={<HeaderMain active={props.active} />} />
       <Route path="/about" element={<About active={props.active} />} />
        <Route path="/resume" element={<Resume active={props.active}/>} />
        <Route path="/contact" element={<Contact active={props.active}/>} />
        <Route path="/portfolio" element={<Portfolio active={props.active}/>} />
     </Routes>
      </div>
    </div>
  </>
  )  
}

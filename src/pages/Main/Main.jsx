// import React, { useEffect,useState } from 'react'
import { About } from '../About/About'
import { Resume } from '../Resume/Resume'
import { Contact } from '../Contact/Contact'
import { Portfolio } from '../Portfolio/Portfolio'
import { HeaderMain } from '../HeaderMain/HeaderMain'
import { Route, Routes } from 'react-router-dom'
import { Language } from '../../components/Language/Language'
import  DarkMode  from '../../components/DarkMode/DarkMode'
import './Main.scss'
export const Main = (props) => {
  return (
    <div className='container'>
      <div className='container_bar G-align-justify-end'>
        <Language/>
        <div className='container_darkMode'>
          <DarkMode/>
        </div>
      </div>
      <div className='box'style={{transform:`rotateY(${props.active * 0}deg)`}}>
        <Routes basename="arturcv">
          <Route path="/arturcv"element={<HeaderMain active={props.active}/>}/>
          <Route path="/about"element={<About active={props.active} />}/>
          <Route path="/resume"element={<Resume active={props.active}/>}/>
          <Route path="/contact"element={<Contact active={props.active}/>}/>
          <Route path="/portfolio"element={<Portfolio active={props.active}/>}/>
        </Routes>
      </div>
    </div>
  )  
}

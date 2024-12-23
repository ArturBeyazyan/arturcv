import { About } from '../About/About'
import { Resume } from '../Resume/Resume'
import { Contact } from '../Contact/Contact'
import { Portfolio } from '../Portfolio/Portfolio'
import { HeaderMain } from '../HeaderMain/HeaderMain'
import { Routes, Route } from "react-router-dom";
import { Language } from '../../components/Language/Language'
import  DarkMode  from '../../components/DarkMode/DarkMode'
import './Main.scss'
import { useState } from 'react'
import { NavBar } from '../NavBar/NavBar'

export const Main = () => {
  const activeList=(index)=>{setActiive(index);}
  const [active,setActiive]=useState(1)
  return (
    <>
      <NavBar active={active} activeList={activeList} />
    <div className='container'>
      <div className='container_bar G-align-justify-end'>
        <Language/>
        <div className='container_darkMode'>
          <DarkMode/>
        </div>
      </div>
      <div className='box'>
        <Routes basename="/arturcv">
          <Route path="/arturcv"element={<HeaderMain active={active}/>}/>
          <Route path="/about"element={<About active={active} />}/>
          <Route path="/resume"element={<Resume active={active}/>}/>
          <Route path="/contact"element={<Contact active={active}/>}/>
          <Route path="/portfolio"element={<Portfolio active={active}/>}/>
        </Routes>
      </div>
    </div>
     </>
  )  
}

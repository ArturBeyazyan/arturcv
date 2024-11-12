import { SlGlobe } from "react-icons/sl"; 
import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next';
import './Language.scss'
import arm from "../../assets/img/AM.png"
import ru from "../../assets/img/RU.png"
import usa from "../../assets/img/USA.png"
import '../../i18n'
const  language=[
  {code:"en",img:usa},
  {code:"ru",img:ru},
  {code:"hy",img:arm},
]
export const Language = () => {
      const [opens,setOpens]=useState(false)
      let menuRef=useRef()
    const {i18n} = useTranslation();
      const changeLanguage=(lng)=>{ 
        i18n.changeLanguage(lng)
    }
    useEffect(()=>{
      let mouse=(e)=>{
        if(!menuRef.current.contains(e.target)){
          setOpens(false)
        }
        
      }
      document.addEventListener("mousedown",mouse)
    })
return (
  <div className='globe 'ref={menuRef}>
    <SlGlobe  onClick={()=>{setOpens(!opens)}}/>
    <div className={`open ${opens ? "opensLenguage":""}`}>
      <div className='flags '>
        {language && language.map((lang)=>{
          return (
            <button key={lang.code} onClick={()=>changeLanguage(lang.code)}className={lang.code ===i18n.language }>
            <img src= {lang.img}alt=''onClick={()=>{setOpens(!opens)}}/>
        </button>
          )
        })}
        </div>
</div> 
</div>
)}
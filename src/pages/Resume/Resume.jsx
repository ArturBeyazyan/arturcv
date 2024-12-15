import './Resume.scss'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Education } from './Education';
import { Skills } from './Skills';
import { Experience } from './Experience';
export const Resume = (props) => {
  const [t]=useTranslation()
  const [active,setActiive]=useState(1)
  const activeList=(index)=>{setActiive(index);}
  return (
    <>
    <section className={`section resume allSection_pages ${props.active === 3 ? "active" : ""}`}>
        <h2 className='title hTwo_title roboto-regular'>{t("Resume")}</h2>
        <div className="tab_box tab_box_all" > 
            <div className={`tab_list G-align-center resume_list ${active === 1 ? "active" : ""}`} onClick={()=>activeList(1)}>
              <h3 className='roboto-regular'>{t("EXPERIENCE")}</h3>
            </div>
            <div  className={`tab_list G-align-center resume_list ${active === 2 ? "active" : ""}`}onClick={()=>activeList(2)} >
              <h3 className='roboto-regular'>{t("Skills")}</h3>
            </div>
            <div className={`tab_list G-align-center resume_list ${active === 3 ? "active" : ""}`}onClick={()=>activeList(3)} >
              <h3 className='roboto-regular'>{t("Education")}</h3>
            </div>
        </div>
        <div className="tab_wrapper">
          <Experience active={active}/>
          <Skills active={active}/>
          <Education active={active}/>
        </div>
    </section>
    </>
  )
}
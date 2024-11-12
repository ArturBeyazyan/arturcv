import React from 'react'
import experence from '../../json/experience.json'
export const Experience = (props) => {
  return (
      <>
         <div className={`tab_grid experience resume_box ${props.active  === 1 ? "active" : ""}`}>
            {experence && experence.map((el,id)=>{
               return(
                  <div className= "tab_item resume_item" key={id}>
                     <h4>{el.titleYers}</h4>
                     <h4>{el.titleData}</h4>
                     <h4>{el.titleLerarn}</h4>
                     <p>{el.info}</p>
                  </div>
               ) 
            })}
         </div>
      </>
   )
}

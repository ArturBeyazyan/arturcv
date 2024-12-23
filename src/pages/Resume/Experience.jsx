import { useTranslation } from 'react-i18next';
import experence from '../../json/experience.json'
export const Experience = (props) => {
   const {t}=useTranslation()
  return (
      <>
         <div className={`tab_grid experience resume_box ${props.active  === 1 ? "active" : ""}`}>
            {experence && experence.map((el,id)=>{
               return(
                  <div className= "tab_item tab_item_all resume_item" key={id}>
                     <h2 className='roboto-regular'>{t(el.title)}</h2>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Iusto repudiandae esse eos explicabo quae
                        assumenda id earum? Nemo, eveniet tempora.
                        </p>
                  </div>
               ) 
            })}
         </div>
      </>
   )
}

import education from '../../json/education.json'
import {useTranslation} from 'react-i18next'
export const Education = (props) => {
    const {t} = useTranslation()
    return (
         <div className={`tab_grid education resume_box ${props.active === 3 ? "active" : ""}`}>
            {education && education.map((el, id) => {
               return (
                  <div className="tab_item tab_item_all resume_item" key={id}>
                     <h4 className='roboto-regular'>{t(el.titleLerarn)}</h4>
                     <h4 className='roboto-regular'>{t(el.titleYers)}</h4>
                     <h4 className='roboto-regular'>{t(el.titleName)}</h4>
                     {/* <p className='roboto-regular'>
                        Lorem ipsum dolor sit, amet consectetur dipisicing elit. Accusamus nam deleniti
                        voluptates harum exercitationem iusto dolorum iste porro esse impedit.
                     </p> */}
                  </div>
               )
            })}
        </div>
    )
}

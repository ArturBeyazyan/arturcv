import {useTranslation} from 'react-i18next';
import skills from '../../json/skills.json'
export const Skills = (props) => {
    const [t] = useTranslation()
    return (
        <div className={`tab_grid skills resume_box ${props.active === 2 ? "active" : ""}`}>
            {skills && skills.map((el, id)=>{
                return (
                    <div className="tab_item resume_item tab_item_all" key={id}>
                      <i className={el.icons_img}></i>
                      <p className='roboto-regular'>{t(el.txt)}</p>
                    </div>
                )
            })}
        </div>
    )
}
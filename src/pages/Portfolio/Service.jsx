import {useTranslation} from 'react-i18next';
import service from '../../json/service.json'
import {NavLink} from 'react-router-dom';
export const Service = (props) => {
    const {t} = useTranslation()
    return (
        <div className={`tab_grid service portfolio_box ${props.active === 2 ? "active": ""}`}>
            {service && service.map((el,id)=>{
                return (
                    <div className="tab_item tab_item_all portfolio_item"key={id}>
                        <div className='portfolio_icon service_icon'>
                            <i className={el.img}></i>
                            <NavLink to="#"className="roboto-regular">
                                <i className="icon-arrowright"></i>
                            </NavLink>
                        </div>
                        <h4 className="roboto-regular">{t(el.title)}</h4>
                        <p  className="roboto-regular">{t(el.info)}</p>
                    </div>
                )
            })}
        </div>
    )
}
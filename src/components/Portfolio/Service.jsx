import {FaArrowLeft, FaCode} from "react-icons/fa";
import {useTranslation} from 'react-i18next';
import service from '../../json/service.json'
import {NavLink} from 'react-router-dom';
export const Service = (props) => {
    const {t} = useTranslation()
    return ( <> <div
        className={`tab_grid service portfolio_box ${props.active === 2
        ? "active"
        : ""}`}>
        {service && service.map((el, id) => {
            return (
                <div className="tab_item portfolio_item" key={id}>
                    <div className='portfolio_icon service_icon'>
                        <FaCode/>
                        <NavLink to="#"><FaArrowLeft/></NavLink>
                    </div>
                    <h4>{t(el.title)}</h4>
                    <p>{t(el.info)}</p>
                </div>
            )
        })
}
    </div> </>
  )
}
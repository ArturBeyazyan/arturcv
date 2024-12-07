import React, {useState} from 'react'
import "./Portfolio.scss"
import {useTranslation} from 'react-i18next';
import {Work} from './Work';
import {Service} from './Service';
export const Portfolio = (props) => {
    const {t} = useTranslation()
    const [active,setActiive] = useState(1)
    const activeList = (index) => {
        setActiive(index);
    }
    return (
        <section className={`section portfolio allSection_pages ${props.active === 4? "active": ""}`}>
            <h2 className='title hTwo_title roboto-regular'> {t("Portfolio")}</h2>
            <div className='tab_box tab_box_all'>
                <div className={`tab_list portfolio_list ${active === 1? "active": ""}`} onClick={() => activeList(1)}>
                    <h3 className='roboto-regular'>{t("Work")}</h3>
                </div>
                <div className={`tab_list portfolio_list ${active === 2? "active": ""}`}onClick={() => activeList(2)}>
                    <h3 className='roboto-regular'>{t("Service")}</h3>
                </div>
            </div>
            <div className='tab_wrapper'>
                <Work active={active}/>
                <Service active={active}/>
            </div>
        </section>
    )
}
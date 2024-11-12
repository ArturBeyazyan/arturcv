import React from 'react'
import './About.scss'
import user from '../../assets/img/users.png'
import {useTranslation} from 'react-i18next'
import {NavLink} from 'react-router-dom'
export const About = (props) => {
    const {t} = useTranslation()
    return (
        <section
            className={`section about G-align-center ${props.active === 2
            ? "active"
            : ""}`}>
            <div className='img_wrapper'>
                <div className='img_box about_img G-justify-center'>
                    <img src={user}/>
                </div>
            </div>
            <div className="about_info">
                <h1 className="tiitle">{t("AboutMe")}</h1>
                <h3>{t("Developer")}</h3>
                <p className="desc">{t("About")}</p>
                <div className='btn_btn'>
                    <NavLink to='/resume' className='btn'>{t("View")}</NavLink>
                </div>
            </div>
        </section>
    )
}

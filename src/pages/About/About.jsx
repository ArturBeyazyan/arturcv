import './About.scss'
import user from '../../assets/img/users.png'
import {useTranslation} from 'react-i18next'
import {NavLink} from 'react-router-dom'
export const About = (props) => {
    const {t} = useTranslation()
    return (
        <section className={`section about G-align-center allSection_pages ${props.active === 2? "active": ""}`}>
            <div className='img_wrapper'>
                <div className='img_box about_img G-justify-center'>
                    <img src={user} alt=''/>
                </div>
            </div>
            <div className="about_info">
                <h1 className="tiitle roboto-regular">{t("AboutMe")}</h1>
                <h3 className='roboto-regular'>{t("Developer")}</h3>
                <p className="desc roboto-regular">{t("About")}</p>
                <div className='btn_btn'>
                    <NavLink to='/resume' className='btn roboto-regular'>{t("View")}</NavLink>
                </div>
            </div>
        </section>
    )
}

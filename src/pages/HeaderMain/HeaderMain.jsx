import {useTranslation} from 'react-i18next'
import user from '../../assets/img/users.png'
import cv from '../../assets/img/CV/CV.pdf'
import './HeaderMain.scss'
import {NavLink} from 'react-router-dom'
export const HeaderMain = (props) => {
    const {t} = useTranslation()
    return (
        <section className={`section home G-align-center allSection_pages ${props.active === 0? "active": ""}`}>
            <div className='home_info'>
                <h1 className='roboto-regular'>{t('Hi')} <br/> {t("I'm" )} 
                    <span className='txt_color roboto-regular'>{t("Artur")}</span>,<br/>{t("Developer")}
                </h1>
                <div className='btn_sci G-align-center'>
                    <div className='btn_btn'>
                        <button className="btn G-inline-flex">
                            <a href={cv} download className='roboto-regular'>{t("Download")} {t("CV")}</a>
                        </button>
                    </div>
                    <div className='sci'>
                        <NavLink to="https://github.com/ArturBeyazyan"className='roboto-regular' target="_blank">
                            <i className='icon-github'></i>
                            <span className='tooltip tooltip_all roboto-regular'>{t("Github")}</span>
                        </NavLink>
                        <NavLink to="https://www.linkedin.com/in/artur-art-317261217/"className='roboto-regular' target="_blank">
                            <i className='icon-linkedin'></i>
                            <span className='tooltip tooltip_all roboto-regular'>{t("Linkedin")}</span>
                        </NavLink>
                        <NavLink className='roboto-regular'to="https://www.facebook.com/artur.beazyan/"target="_blank">
                            <i className='icon-facebook'></i>
                            <span className='tooltip tooltip_all roboto-regular'>{t("Facebook")}</span>
                        </NavLink>
                        <NavLink className='roboto-regular'to="https://t.me/Artur5544"target="_blank">
                            <i className='icon-telegram'></i>
                            <span className='tooltip tooltip_all roboto-regular'>{t("Telegram")}</span>
                        </NavLink>
                    </div>
                </div>
            </div>
            <div className='img_wrapper'>
                <div className='img_box home_img G-justify-center'>
                    <img src={user} alt=''/>
                </div>
            </div>
        </section>
    )
}
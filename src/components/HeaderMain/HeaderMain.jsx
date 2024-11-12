import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import user from '../../assets/img/users.png'
import cv from '../../assets/img/CV/Artur_Beyazyan.pdf'
import './HeaderMain.scss'
import { BsGithub,BsLinkedin,BsFacebook,BsTelegram } from 'react-icons/bs';
export const HeaderMain = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    // const [time,setTime]=useState(new Date())
  // useEffect(() => {
  //     setTimeout(() => {
  //       setIsLoading(false);
  //     }, 2000);
  //     // setInterval(()=>setTime(new Date()),1000)
  // }, []);=
const {t}=useTranslation()
return (
<>
      <section className={`section home G-align-center ${props.active === 0 ? "active" : ""}`}>
        <div className='home_info'>
        <h1>{t('Hi')}<br/>{t("I'm")}<span className='txt_color'>{t("Artur")}</span>,<br/>{t("Developer")}</h1>
       
          <div className='btn_sci G-align-center'>
            <div className='btn_btn'>
              <button className="btn G-inline-flex">
                <a href={cv} download>{t("Download")} {t("CV")}</a>
                </button>
            </div>
            <div className='sci'>
                <a href='https://github.com/Artur5544-a'target={"_blank"} >
                  <BsGithub />
                  <span className='tooltip'>{t("Github")}</span>
                </a>
                <a href='https://www.linkedin.com/in/artur-art-317261217/'target={"_blank"} >
                  <BsLinkedin /> 
                  <span className='tooltip'>{t("Linkedin")}</span>
                </a>
                <a href='https://www.facebook.com/artur.beazyan/'target={"_blank"} >
                  <BsFacebook /> 
                  <span className='tooltip'>{t("Facebook")}</span>
                </a>
                <a href='https://t.me/Artur5544' target={"_blank"}>
                  <BsTelegram /> 
                  <span className='tooltip'>{t("Telegram")}</span>
                </a>
            </div>
          </div>
        </div>
        <div className='img_wrapper'>
          <div className='img_box home_img G-justify-center'>
            <img src={user}  />
          </div>
        </div>
      </section>   
</>
)}





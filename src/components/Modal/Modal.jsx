import {BiCheckCircle} from "react-icons/bi";
import {useState} from 'react'
import './Modal.scss'
import {useTranslation} from 'react-i18next'
export const Modal = (props) => {
    const {t} = useTranslation()
    const [isLoading, setIsLoading] = useState(false)
    return (  <div className={`modal ${props.active? "modalopen": ""}`}>
        {props.active ? <div className='popup'>
                    <BiCheckCircle/>
                    <h2>{t("Thanks")}</h2>
                    {props.active? <h3> {props.active}</h3>: null}
                    <button onClick={props.Active}>{t("OK")}</button>
                </div>
                : null}
    </div> 
    )
}
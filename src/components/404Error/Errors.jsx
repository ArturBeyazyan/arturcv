import { NavLink } from 'react-router-dom'
import './Errors.css'
import {useTranslation} from 'react-i18next'

export const Errors = () => {
	const {t}=useTranslation()
return (
    <div className='Errors G-center '>
		<div className="room G-center ">
			<div className="cuboid">
				<div className="side"></div>
				<div className="side"></div>
				<div className="side"></div>
			</div>
			<div className="oops">
				<h2>{t("OOPS")}</h2>
				<p>{t("Errors404")}</p>
			</div>
			<div className="center-line G-justify-center-direction">
				<div className="hole">
					<div className="ladder-shadow"></div>
					<div className="ladder"></div>
				</div>
				<div className="four">{t("4")}</div>
				<div className="four">{t("4")}</div>
				<div className="btn_err">
					<NavLink to='/arturcv'>{t("BACK")}</NavLink>
				</div>
			</div>
		</div>
    </div>
)
}

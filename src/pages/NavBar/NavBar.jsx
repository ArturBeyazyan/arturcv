import './NavBar.scss';
import {NavLink} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
export const NavBar = (props) => {
    const {t} = useTranslation()
    return (  
        <div className='NavBar'>
            <nav className='nav'>
                <ul className='nav_list G-justify-evenly '>
                    <li onClick={() => props.activeList(1)}>
                        <NavLink to='/arturcv'className="roboto-regular"> 
                            <i className='icon-home'></i>
                            <span className='tooltip tooltip_all roboto-regular'>{t("Home")}</span>
                        </NavLink>
                    </li>
                    <li className={`${props.active === 2 ? "active": ""}`} onClick={() => props.activeList(2)}>
                        <NavLink to='/about' className="roboto-regular">
                            <i className='icon-user'></i>
                            <span className='tooltip tooltip_all roboto-regular'> {t("AboutMe")}</span>
                        </NavLink>
                    </li>
                    <li className={`${props.active === 3 ? "active": ""}`}onClick={() => props.activeList(3)}>
                        <NavLink to='/resume' className="roboto-regular">
                            <i className='icon-detail'></i>
                            <span className='tooltip tooltip_all roboto-regular'>{t("Resume")}</span>
                        </NavLink>
                    </li>
                    <li className={`${props.active === 4 ? "active": ""}`}onClick={() => props.activeList(4)}>
                        <NavLink to='/portfolio' className="roboto-regular">
                            <i className='icon-briefcase'></i>
                            <span className='tooltip tooltip_all roboto-regular'>{t("Portfolio")}</span>
                        </NavLink>
                    </li>
                    <li className={`${props.active === 5 ? "active": ""}`}onClick={() => props.activeList(5)}>
                        <NavLink to='/contact' className="roboto-regular">
                            <i className='icon-mail'></i>
                            <span className='tooltip tooltip_all roboto-regular'> {t("Contact")}</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div> 
    )
}
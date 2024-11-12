import React from 'react';
import './NavBar.scss';
import {NavLink} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import {GoHome} from "react-icons/go";
import {BsBriefcase} from "react-icons/bs";
import {BiDetail} from "react-icons/bi";
import {LuUser} from "react-icons/lu";
import {GoMail} from "react-icons/go";
export const NavBar = (props) => {
    const {t} = useTranslation()
    return (  <div className='NavBar'>
        <nav className='nav'>
            <ul className='nav_list G-justify-evenly '>
                <li onClick={() => props.activeList(1)}>
                    <NavLink to='/'><GoHome/>
                        <span className='tooltip'>{t("Home")}</span>
                    </NavLink>
                </li>
                <li
                    className={`${props.active === 2
                    ? "active"
                    : ""}`}
                    onClick={() => props.activeList(2)}>
                    <NavLink to='/about'>
                        <LuUser/>
                        <span className='tooltip'>
                            {t("AboutMe")}</span>
                    </NavLink>
                </li>
                <li
                    className={`${props.active === 3
                    ? "active"
                    : ""}`}
                    onClick={() => props.activeList(3)}>
                    <NavLink to='/resume'>
                        <BiDetail/>
                        <span className='tooltip'>
                            {t("Resume")}</span>
                    </NavLink>
                </li>
                <li
                    className={`${props.active === 4
                    ? "active"
                    : ""}`}
                    onClick={() => props.activeList(4)}>
                    <NavLink to='/portfolio'>
                        <BsBriefcase/>
                        <span className='tooltip'>
                            {t("Portfolio")}</span>
                    </NavLink>
                </li>
                <li
                    className={`${props.active === 5
                    ? "active"
                    : ""}`}
                    onClick={() => props.activeList(5)}>
                    <NavLink to='/contact'>
                        <GoMail/>
                        <span className='tooltip'>
                            {t("Contact")}</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    </div> 
)
}
import {FaArrowLeft, FaGithub} from "react-icons/fa";
import {useTranslation} from 'react-i18next';
import works from '../../json/works.json'
import { NavLink } from "react-router-dom";
export const Work = (props) => {
    const {t} = useTranslation()
    return (
        <div
            className={`tab_grid work portfolio_box ${props.active === 1
            ? "active"
            : ""}`}>
            {works && works.map((el, id) => {
                return (
                    <div className="tab_item portfolio_item">
                        <div className="work_img">
                            <img src={require(`../../assets/img/portfolioImg/${el.img}.png`)} alt=""/>
                        </div>
                        <div className="work_info">
                            <h4>{t(el.title)}</h4>
                            <p>{t(el.title )}</p>
                            <div className="tech_used">
                                <p>{t(el.tech_used)} {t(el.tech_skills)}</p>
                            </div>
                            <div className="portfolio_icon work_icon">
                                <NavLink to={el.preview_url} target="_blank"><FaArrowLeft/>
                                        <span className='tooltip'>{t(el.path_Preview)}</span>
                                </NavLink>
                                <NavLink to={el.git_url} target="_blank"><FaGithub/>
                                    <span className='tooltip'>{t(el.path_git)}</span>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                )
            })
}
        </div>
    )
}
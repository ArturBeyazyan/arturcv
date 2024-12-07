import {useTranslation} from 'react-i18next';
import works from '../../json/works.json'
import {NavLink} from "react-router-dom";
export const Work = (props) => {
    const {t} = useTranslation()
    return (
        <div className={`tab_grid work portfolio_box ${props.active === 1 ? "active" : ""}`}>
            {works && works.map((el, id) => {
                return (
                    <div key={id} className="tab_item tab_item_all portfolio_item">
                        <div className="work_img">
                            <img src={require(`../../assets/img/portfolioImg/${el.img}.png`)} alt=""/>
                        </div>
                        <div className="work_info">
                            <h4 className="roboto-regular">{t(el.title)}</h4>
                            <p className="roboto-regular">{t(el.title)}</p>
                            <div className="tech_used">
                                <p className="roboto-regular">{t(el.tech_used)} {t(el.tech_skills)}</p>
                            </div>
                            <div className="portfolio_icon work_icon">
                                <NavLink to={el.preview_url} target="_blank">
                                    <i className="icon-arrowright"></i>
                                    <span className='tooltip tooltip_all roboto-regular'>{t("Preview")}</span>
                                </NavLink>
                                <NavLink to={el.git_url} target="_blank">
                                    <i className="icon-github"></i>
                                    <span className='tooltip tooltip_all roboto-regular'>{t("GithubRepository")}</span>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
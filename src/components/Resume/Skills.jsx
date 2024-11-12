import { SiRedux } from "react-icons/si"; 
import { BsGit } from "react-icons/bs"; 
import { TbBrandNextjs } from "react-icons/tb"; 
import { DiNodejs } from "react-icons/di";  
import { FaHtml5,FaCss3Alt,FaReact,FaFigma,FaSass,FaLess } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { BsBootstrapFill } from "react-icons/bs";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiJquery,SiMui,SiTypescript,SiCssmodules,SiVite} from "react-icons/si";
import { CgNpm } from "react-icons/cg";
import { AiFillGithub } from "react-icons/ai";  
import { useTranslation } from 'react-i18next';
export const Skills = (props) => {
  const [t]=useTranslation()
  return (
    <>
      <div className={`tab_grid skills resume_box ${props.active  === 2 ? "active" : ""}`}>
        <div className="tab_item resume_item"><FaHtml5/><p>{t("HTML")}</p></div>
        <div className="tab_item resume_item"><FaCss3Alt/><p>{t("CSS")}</p></div>
        <div className="tab_item resume_item"><FaSass/><p>{t("SASS")}</p></div>
        <div className="tab_item resume_item"><FaLess/><p>{t("LESS")}</p></div>
        <div className="tab_item resume_item"><SiCssmodules/><p>{t("MODULE")}</p></div>
        <div className="tab_item resume_item"><BsBootstrapFill/><p>{t("BOOTSTRAP")}</p></div>
        <div className="tab_item resume_item"><RiTailwindCssFill/><p>{t("TAILWIND")}</p></div>
        <div className="tab_item resume_item"><IoLogoJavascript/><p>{t("JAVASCRIPT")}</p></div>
        <div className="tab_item resume_item"><SiJquery/><p>{t("Jquery")}</p></div>
        <div className="tab_item resume_item"><SiTypescript/><p>{t("TypeScript")}</p></div>
        <div className="tab_item resume_item"><FaReact/><p>{t("REACT")}</p></div>
        <div className="tab_item resume_item"><SiRedux/><p>{t("REDUX")}</p></div>
        <div className="tab_item resume_item"><DiNodejs/><p>{t("NODE")}</p></div>
        <div className="tab_item resume_item"><TbBrandNextjs/><p>{t("NEXT")}</p></div>
        <div className="tab_item resume_item"><SiVite/><p>{t("VITE")}</p></div>
        <div className="tab_item resume_item"><CgNpm/><p>{t("NPM")}</p></div>
        <div className="tab_item resume_item"><SiMui/><p>{t("MUI")}</p></div>
        <div className="tab_item resume_item"><BsGit/><p>{t("GIT")}</p></div>
        <div className="tab_item resume_item"><AiFillGithub/><p>{t("GITHUB")}</p></div>
        <div className="tab_item resume_item"><FaFigma/><p>{t("FIGMA")}</p></div>
      </div>
    </>
  )
}

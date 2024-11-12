import { ReactComponent as Sun } from "../../assets/img/Sun.svg";
import { ReactComponent as Moon } from "../../assets/img/Moon.svg";
import "./DarkMode.css";

const DarkMode = () => {
	const setDarkMode=()=>{
		document.querySelector("body").setAttribute('data-theme','dark')
		localStorage.setItem("darks","dark")
	}
	const setLightMode=()=>{
		document.querySelector("body").setAttribute('data-theme','light')
		localStorage.setItem("darks","light")
	}
	const selectTheme=localStorage.getItem("darks")
	if(selectTheme==="dark"){
		setDarkMode()
	}
	const toggleTheme=(e)=>{
		if(e.target.checked)setDarkMode()
		else setLightMode()
	}

    return (
        <div className='dark_mode'>
            <input className='dark_mode_input' type='checkbox'id='darkmode-toggle'onChange={toggleTheme}defaultChecked={selectTheme ==="dark"}/>
            <label className='dark_mode_label' for='darkmode-toggle'>
                <Sun/><Moon/>
            </label>
        </div>
    );
};
export default DarkMode;

import "./DarkMode.scss";
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
			<i className="icon-Sun"></i>
            <i className="icon-Moon"></i>
            </label>
        </div>
    );
};
export default DarkMode;
import {useRef, useState} from 'react'
import "./Contact.scss"
import emailjs from '@emailjs/browser';
import {useTranslation} from 'react-i18next';

export const Contact = (props) => {
    const {t} = useTranslation()
    const [formData, setFormData] = useState({from_name: "", from_lastName: "", from_email: "",from_phone:"", message: ""})
    const [errors,setErrors] = useState()
    const form = useRef();
    const isValidEmail = (from_email) => {
        const emailRegex = /^\S+@\S+\.\S+$/;
        return emailRegex.test(from_email);
    };
    // const isValidPhoneNumber = (from_phone) => {
    //     const phoneRegex = /^\d{10}$/;
    //     return phoneRegex.test(from_phone);
    // }
    const validateForm = () => {
        let newError = {}
        if (!formData.from_name) {
            newError.from_name = "First name is required"
        }
        if (!formData.from_lastName) {
            newError.from_lastName = "Last name is required"
        }
        if (!formData.from_email) {
            newError.from_email = "Email is required";
        } else if (!isValidEmail(formData.from_email)) {
            newError.from_email = "Invalid email format";
        }
        if (!formData.from_phone) {
            console.log(formData.from_phone);
            newError.from_phone = "Phone number is required";
        } 
        // else if (!isValidPhoneNumber(from_phone)) {
        //     console.log(from_phone, "PHONE");
        //     newError.from_phone = "Phone number must be 10 digits";
        // }
        if (!formData.message) {
            newError.message = "First name is required"
        }
        setErrors(newError);
        return Object.keys(newError).length < 1
    }
    const sendEmail = (e) => {
        emailjs
            .sendForm('service_fku2x4h', 'template_gx6b0i2', form.current, {publicKey: 'gXxhCD4Q4Zc3eP2SN'})
            .then(() => {
                if ('SUCCESS') {
                    window.location.reload(false)
                    // console.log('SUCCESS');
                }
            }, (error) => {
                // console.log('FAILED...', error.text);
            },);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validateForm();
        if (isValid) {
            sendEmail(formData)
            // window.location.reload(false)
            // console.log("Form Submitted", formData);
        } else {
            // console.log("Form Validation Failed");
        }
    }
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }
    return (
        <section className={`section contact allSection_pages ${props.active === 5 ? "active": ""}`}>
            <h2 className='title hTwo_title roboto-regular'>{t("Contact")}</h2>
            <div className="contact_wrapper G-justify-center">
                <form onSubmit={handleSubmit} className='contact_form G-justify-center-direction ' ref={form}>
                    <h3 className='roboto-regular'>{t("Together")}</h3>
                    <div className='field_box G-flex-wrap'>
                        <div className='inputBox'>
                            <input
                                type="text"
                                name="from_name"
                                required="required"
                                onChange={handleChange}
                                value={formData.from_name}
                            />
                            <span className='roboto-regular'>{t("FName")}</span>
                            <i></i>
                        </div>
                        <div className='inputBox'>
                            <input
                                type="text"
                                name="from_lastName"
                                required="required"
                                onChange={handleChange}
                                value={formData.from_lastName}/>
                            <span className='roboto-regular'>{t("LName")}</span>
                            <i></i>
                        </div>
                        <div className='inputBox'>
                            <input
                                required="required"
                                onChange={handleChange}
                                value={formData.from_phone}
                                name="from_phone"
                                type="number"/>
                            <span className='roboto-regular'>{t("Phone")}</span>
                            <i></i>
                        </div>
                        <div className='inputBox'>
                            <input
                                required="required"
                                onChange={handleChange}
                                value={formData.from_email}
                                name="from_email"
                                type="text"/>
                            <span className='roboto-regular'>{t("Email")}</span>
                            <i></i>
                        </div>
                        <div className='inputBox inputBox_area '>
                            <textarea
                                name="message"
                                onChange={handleChange}
                                required="required"
                                value={formData.message}></textarea>
                            <span className='roboto-regular'>{t('YourMessage')}</span>
                            <i></i>
                        </div>
                    </div>
                    <div className="contact_btn">
                        <button type='submit' className='btn'>{t("Message")}</button>
                    </div>
                </form>
            </div>
        </section>
    )
}
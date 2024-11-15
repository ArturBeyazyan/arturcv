import React, {useRef, useState} from 'react'
import "./Contact.scss"
// import {Modal} from '../Modal/Modal'
import emailjs from '@emailjs/browser';
import {useTranslation} from 'react-i18next';
import 'react-phone-input-2/lib/style.css'
export const Contact = (props) => {
    const {t} = useTranslation() 
    const [formData,setFormData] = useState({from_name: "", from_lastName: "", from_email: "", message: "", from_phone: ""})
    const [error,setErrors] = useState()
    const form = useRef();
    // const sendEmail = (e) => {
    //     e.preventDefault();
    //     emailjs
    //         .sendForm('service_fku2x4h', 'template_gx6b0i2', form.current, {publicKey: 'gXxhCD4Q4Zc3eP2SN'})
    //         .then(() => {
    //             if ('SUCCESS') {
    //                 console.log('SUCCESS');
    //             }
    //         }, (error) => {
    //             console.log('FAILED...', error.text);
    //         },);
    // };
    const handleSubmit = (e) => {
        // sendEmail()
        const isValid = validateForm();
        if (isValid) {
          console.log("Form Submitted", formData);
        } else {
          console.log("Form Validation Failed");
        }
    }
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }
    const isValidEmail = (email) => {
        const emailRegex = /^\S+@\S+\.\S+$/;
        return emailRegex.test(email);
    };
    const isValidPhoneNumber = (from_phone) => {
        const phoneRegex = /^\d{10}$/;
        return phoneRegex.test(from_phone); };
    const validateForm = (data) => {
        let errors = {}
        if (!data.from_name) {
            errors.from_name = "First name is required"
        }
        if (!data.from_lastName) {
            errors.from_lastName = "Last name is required"
        }

        if (!formData.from_email) {
            errors.from_email = "Email is required";
        } else if (!isValidEmail(formData.from_email)) {
            errors.from_email = "Invalid email format";
        }
        if (!formData.from_phone) {
            errors.from_phone = "Phone number is required";
          } else if (!isValidPhoneNumber(formData.from_phone)) {
            errors.from_phone = "Phone number must be 10 digits";
          }
        if (!data.message) {
            errors.message = "First name is required"
        }
        // setErrors(errors);

        return Object.keys(errors).length===0
    }
    console.log(error);
    return (
        <section
            className={`section contact ${props.active === 5
            ? "active"
            : ""}`}>
            {/* <Modal Active={Active} active={active} /> */}
            <h2>{t("Contact")}</h2>
            <div className="contact_wrapper G-justify-center">
                <form className='contact_form 'onSubmit={handleSubmit}>
                    <h3>{t("Together")}</h3>
                    <div className='field_box G-flex-wrap'>
                        <div className='inputBox'>
                            <input
                                type={"text"}
                                name="from_firstName"
                                // required="required"
                                onChange={handleChange}
                                value={formData.from_name}/>
                            <span>{t("FName")}</span>
                            <i></i>
                            {error.from_name && (
                                <div className="error">{error.from_name}</div>
                            )}
                        </div>
                        <div className='inputBox'>
                            <input
                                type={"text"}
                                name="from_lastName"
                                required="required"
                                onChange={handleChange}
                                value={formData.from_lastName}/>
                            <span>{t("LName")}</span>
                            <i></i>
                            {error.from_lastName && (
                                <div className="error">{error.from_lastName}</div>
                            )}
                        </div>
                        <div className='inputBox'>
                            <input required="required"onChange={handleChange}value={formData.from_phone} name="from_phone" type={"tel"}pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"/>
                            <span>{t("Phone")}</span>
                            <i></i>
                            {error.from_phone && (
                                <div className="error">{error.from_phone}</div>
                            )}
                        </div>
                        <div className='inputBox'>
                            <input required="required"name="from_email" type={"email"} onChange={handleChange}value={formData.from_email}/>
                            <span>{t("Email")}</span>
                            <i></i>
                            {error.from_email && (
                                <div className="error">{error.from_email}</div>
                            )}
                        </div>
                        <div className='inputBox inputBox_area '>
                            <textarea
                                name="message"
                                onChange={handleChange}
                                required="required"
                                value={formData.message}></textarea>
                            <span>{t('YourMessage')}</span>
                            <i></i>
                            {error.message && (
                                <div className="error">{error.message}</div>
                            )}
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
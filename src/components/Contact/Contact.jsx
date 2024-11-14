import React, {useRef, useState} from 'react'
import "./Contact.scss"
import {Modal} from '../Modal/Modal'
import emailjs from '@emailjs/browser';
import {useTranslation} from 'react-i18next';
import 'react-phone-input-2/lib/style.css'
import PhoneInput from 'react-phone-input-2'
export const Contact = (props) => {
    const [isLoading,
        setIsLoading] = useState(false)
    const {t} = useTranslation()
    // const [active, setActive] = useState(false) const form = useRef(); const
    // sendEmail = (e) => {   e.preventDefault();   emailjs.sendForm('Portfolio',
    // 'template_rbddssu', form.current, {       publicKey: 'gXxhCD4Q4Zc3eP2SN', })
    // .then(() => {if('SUCCESS'){setIsLoading(true)}},     (error) =>
    // {console.log('FAILED...', error.text);},     ); };
    const Active = () => {
        setIsLoading(true)
        // setActive(!active)
    }
    const [formData,
        setFormData] = useState({firstName: "", lastName: "", email: "", message: "", phone: ""})
    const [errors,
        setErrors] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault();
        const ValidationError = validateForm(formData)
        setErrors(ValidationError)
        console.log(formData);
    }
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }
    const isValidEmail = (email) => {
        // Regular expression for basic email validation
        const emailRegex = /^\S+@\S+\.\S+$/;
        return emailRegex.test(email);
    };
    // const isValidPhoneNumber = (phoneNumber) => {     // Regular expression for
    // basic phone number validation (10 digits)     const phoneRegex = /^\d{10}$/;
    //  return phoneRegex.test(phoneNumber); };
    const validateForm = (data) => {
        let errors = {}
        if (!data.firstName) {
            errors.firstName = "First name is required"
        }
        if (!data.lastName) {
            errors.lastName = "Last name is required"
        }

        if (!formData.email) {
            errors.email = "Email is required";
        } else if (!isValidEmail(formData.email)) {
            errors.email = "Invalid email format";
        }
        if (!data.message) {
            errors.message = "First name is required"
        }
        return errors
    }

    function PhoneNumber(value) {
        if (!value) 
            return value
        const number = value.replace(/[^\d]/g, '');
        const numberLenght = number.length;
        if (numberLenght < 4) 
            return number
        if (numberLenght < 7) {
            return `(${number.slice(0, 3)}) ${number.slice(3)}`;
        }
        return `(${number.slice(0, 3)})${number.slice(3, 6)}-${number.slice(6, 9)}`
    }
    // const serviceId = 'service_fku2x4h' const templateID = 'template_gx6b0i2'
    // const publicKey = 'gXxhCD4Q4Zc3eP2SN'   const templateParams = {
    // from_name: firstName,     to_name: 'ARTUR',     from_phone: phone,
    // from_email: email,     message: message } emailjs     .sendForm(serviceId,
    // templateID, templateParams, publicKey,)     .then((response) => {
    // console.log('fgfgfdgdgdfgdfgdfgdfgdfgdfgd', response);
    // setFirstName('')
    // setLastName('')setPhone('')setEmail('')setMessage('')     })

    return (
        <section
            className={`section contact ${props.active === 5
            ? "active"
            : ""}`}>
            {/* <Modal Active={Active} active={active} /> */}
            <h2>{t("Contact")}</h2>
            <div className="contact_wrapper G-justify-center">
                <form className='contact_form ' onSubmit={handleSubmit}>
                    <h3>{t("Together")}</h3>
                    <div className='field_box G-flex-wrap'>
                        <div className='inputBox'>
                            <input
                                type={"text"}
                                name="firstName"
                                required="required"
                                onChange={handleChange}
                                value={formData.firstName}/>
                            <span>{t("FName")}</span>
                            <i></i>
                            {errors.firstName && (
                                <div className="error">{errors.firstName}</div>
                            )}
                        </div>
                        <div className='inputBox'>
                            <input
                                type={"text"}
                                name="lastName"
                                required="required"
                                onChange={handleChange}
                                value={formData.lastName}/>
                            <span>{t("LName")}</span>
                            <i></i>
                            {errors.lastName && (
                                <div className="error">{errors.lastName}</div>
                            )}
                        </div>
                        <div className='inputBox'>
                            <input type={"tel"}name="phone"required="required"onChange={handleChange}value={formData.phone}/>
                            <span>{t("Phone")}</span>
                            <i></i>
                            {errors.phone && (<div className="error">{errors.phone}</div>)}
                        </div>
                        <div className='inputBox'>
                            <input type={"email"}name="email"required="required"onChange={handleChange}value={formData.email}/>
                            <span>{t("Email")}</span>
                            <i></i>
                            {errors.email && (<div className="error">{errors.email}</div>)}
                        </div>
                        <div className='inputBox inputBox_area '>
                            <textarea
                              
                              
                                name="message"
                                onChange={handleChange}
                                required="required"
                                value={formData.message}></textarea>
                            <span>{t('YourMessage')}</span>
                            <i></i>
                            {errors.message && (
                                <div className="error">{errors.message}</div>
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
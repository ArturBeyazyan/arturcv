import { useEffect, useState } from 'react'
import './ButtonLoader.scss'
export const ButtonLoader = () => {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000);
    }, [])
    return (
        <div className='button_loader'>
            {loading ? (
                <div className="holder">
                    <div className="preloader">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            ) : null}
        </div>
    )
}

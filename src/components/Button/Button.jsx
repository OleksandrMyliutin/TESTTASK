import React from 'react'
import s from './Button.module.css'
const Button = ({children}) => {
    return (
        <div>
            <button className={s.btnStyle}>{children}</button>
        </div>
    )
}

export default Button

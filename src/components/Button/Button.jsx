import React from 'react'
import s from './Button.module.css'
const Button = ({children, disabled=false}) => {
    return (
        <div>
            <button className={`${s.btnStyle} ${disabled ? s.disabledStyle : ''}`}>{children}</button>
        </div>
    )
}

export default Button

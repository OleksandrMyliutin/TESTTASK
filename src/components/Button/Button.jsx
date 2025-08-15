import React from 'react'
import s from './Button.module.css'
import Loader from '../Loader/Loader';
const Button = ({id, children, link=false, disabled=false, loadMoreInfo=false, type = "button", onClick, ...rest}) => {
    
    return (
        <>
            {link && (<a href={id} className={`${s.btnStyle} ${disabled ? s.disabledStyle : ''} `} alt="Anchor link">{children}</a>)}
            {!link && <button type={type} onClick={onClick}  className={`${s.btnStyle} ${disabled ? s.disabledStyle : ''} ${loadMoreInfo ? s.loadMore : ''}{...rest} ` } {...rest}>{children}</button>}
        </>
    )
}

export default Button

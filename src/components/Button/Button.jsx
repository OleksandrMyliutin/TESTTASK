import React from 'react'
import s from './Button.module.css'
const Button = ({id, children, link=false, disabled=false, loadMoreInfo=false}) => {
    return (
        <>
            {link && (<a href={id} className={`${s.btnStyle} ${disabled ? s.disabledStyle : ''} `} alt="Anchor link">{children}</a>)}
            {!link && <button className={`${s.btnStyle} ${disabled ? s.disabledStyle : ''} ${loadMoreInfo ? s.loadMore : ''}`}>{children}</button>}
        </>
    )
}

export default Button

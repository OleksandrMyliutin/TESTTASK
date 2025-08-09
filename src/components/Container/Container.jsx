import React from 'react'
import s from './Container.module.css'
const Container = ({children, backImg=false}) => {
    return (
        <div className={`${s.container} ${backImg ? s.addBackImg : ''}`}>
        {children}
        </div>
    )
}

export default Container

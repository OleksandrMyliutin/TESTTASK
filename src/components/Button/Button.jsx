import React from 'react'
import s from './Button.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserCards } from '../../redux/operations';
import { selectCurrentPage } from '../../redux/selectors';
const Button = ({id, children, link=false, disabled=false, loadMoreInfo=false}) => {
    const dispatch = useDispatch();
    const currentPage = useSelector(selectCurrentPage);
    const onShowMore = ()=>{
        dispatch(fetchUserCards({page: currentPage + 1, count: 6}))
    };
    return (
        <>
            {link && (<a href={id} className={`${s.btnStyle} ${disabled ? s.disabledStyle : ''} `} alt="Anchor link">{children}</a>)}
            {!link && <button onClick={onShowMore} className={`${s.btnStyle} ${disabled ? s.disabledStyle : ''} ${loadMoreInfo ? s.loadMore : ''}`}>{children}</button>}
        </>
    )
}

export default Button

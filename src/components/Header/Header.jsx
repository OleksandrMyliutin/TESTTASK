import React from 'react'
import Button from '../Button/Button'
import svg from '../../assets/icons/Logo.svg';
import Container from '../Container/Container';
import s from './Header.module.css'
const Header = () => {
    return (
        <>
            <div className={s.headerStyle}>
                <Container>
                    <div className={s.headerContainer}>
                        <div><img src={svg} alt="logo" /></div>
                        <div className={s.buttonsContainer}>
                            <Button link id={"#OurCheerfulUsers"}><p className={s.paragraph}>User</p></Button>
                            <Button link id={"#RegisterToGetWork"}><p className={s.paragraph}>Sign up</p></Button>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Header

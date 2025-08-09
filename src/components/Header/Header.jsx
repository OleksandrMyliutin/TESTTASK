import React from 'react'
import Button from '../Button/Button'
import svg from '../../assets/icons/Logo.svg';
import Container from '../Container/Container';
import s from './Header.module.css'
const Header = () => {
    return (
        <>
            <Container>
                <div className={s.headerContainer}>
                    <div><img src={svg} alt="logo" /></div>
                    <div className={s.buttonsContainer}>
                        <Button>
                            <a href="#OurCheerfulUsers">User</a>
                        </Button>
                        <Button><a href="#RegisterToGetWork">Sign up</a></Button>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Header

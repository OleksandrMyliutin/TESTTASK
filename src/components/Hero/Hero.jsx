import React from 'react'
import Button from '../Button/Button'
import Container from '../Container/Container'
import s from './Hero.module.css'
const Hero = () => {
    return (
        <div id='hero' className={s.heroContainer}>
            <Container backImg={true}>
                <div className={s.containerImage}>
                        <div className={s.containerText}>
                            <h1 className={s.title}>Test assignment for front-end developer</h1>
                            <p className={s.paragraph}>What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.</p>
                        </div>
                    <Button link id={"#RegisterToGetWork"}><p className={s.paragraphBtn}>Sign up</p></Button>
                </div>
            </Container>
        </div>
    )
}

export default Hero

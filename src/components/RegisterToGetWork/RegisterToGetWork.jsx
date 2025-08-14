import React from 'react'
import s from "./RegisterToGetWork.module.css"
import InputForm from './InputForm/InputForm'
import Container from '../Container/Container'
const RegisterToGetWork = () => {
  return (
    <div id="RegisterToGetWork" className={s.style}>
      <Container>
        <div className={s.specialContainer}>
          <h2 className={s.title}>Working with POST request</h2>
          <InputForm/>
        </div>
      </Container>
    </div>
  )
}

export default RegisterToGetWork

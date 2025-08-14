import React from 'react'
import s from "./UserCardsList.module.css"
const UserCard = ({ name, email, phone, position, photo}) => {
  return (
    <>
      <img src={photo} alt="photoUser" className={s.imageStyle}/>
      <p className={s.paragraphStyle}>{name}</p>
      <p>{position}</p>
      <p>{email}</p>
      <p>{phone}</p>
    </>
  )
}

export default UserCard

import React from 'react'
import s from "./UserCard.module.css"
const UserCard = ({ name, email, phone, position, photo}) => {
  return (
    <>
      <img src={photo} alt="photoUser" className={s.imageStyle}/>
      <p className={s.paragraphStyle}>{name}</p>
      <p className={s.ellipsis1}>{position}</p>
      <p className={s.ellipsis1}>{email}</p>
      <p className={s.ellipsis1}>{phone}</p>
    </>
  )
}

export default UserCard

import React from 'react'

const UserCard = ({ name, email, phone, position, photo}) => {
  return (
    <div >
      <p>{name}</p>
      <p>{email}</p>
      <p>{phone}</p>
      <p>{position}</p>
      <img src={photo} alt="photoUser" />
    </div>
  )
}

export default UserCard

import React  from 'react'
import UserCard from './UserCard'


const UserCardsList = ({users}) => {
  
  return (
    <div>
      <ul>
        {Array.isArray(users) && users.map(({_id, img, nameUser, title, number})=>{
          return (
          <UserCard id={_id} img={img} user={nameUser} title={title} number={number}/>
        );
        })}
      </ul>
    </div>
  )
}

export default UserCardsList

import UserCard from './UserCard/UserCard'
import { useSelector } from 'react-redux';

import Loader from '../Loader/Loader';
import s from './UserCardsList.module.css'
import {selectUser,  } from '../../redux/selectors';





const UserCardsList = () => {
  const user = useSelector(selectUser);
  const userArr = user?.users || [];
  return (
    <>
      <ul className={s.listStyle}>
        {Array.isArray(userArr) && userArr.map(({id, name, email, phone, position, photo}) => (
          <li key={id} className={s.listItem}>
            <UserCard
              photo={photo}
              name={name}
              position={position}
              email={email}
              phone={phone}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

export default UserCardsList

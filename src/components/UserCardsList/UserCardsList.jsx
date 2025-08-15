import UserCard from './UserCard/UserCard'
import { useSelector } from 'react-redux';

import Loader from '../Loader/Loader';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import s from './UserCardsList.module.css'
import { selectLoader, selectUser, selectUserError } from '../../redux/selectors';




const UserCardsList = () => {
  const user = useSelector(selectUser);
  const error = useSelector(selectUserError);
  const isLoading = useSelector(selectLoader);
  useEffect(() => {
    if (error) {
      toast.error("Сталася помилка!");
    }
  }, [error]);
  
  const userArr = user?.users || [];
  

  return (
    <>
      <ul className={s.listStyle}>
        {isLoading && <Loader />}
        {!isLoading && Array.isArray(userArr) && userArr.map(({id, name, email, phone, position, photo}) => (
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

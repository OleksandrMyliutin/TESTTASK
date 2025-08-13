import UserCard from './UserCard'
import {  useSelector } from 'react-redux';
import { selectLoader, selectUser, selectUserError } from '../../redux/users/selectors';
import Loader from '../Loader/Loader';
import { useEffect } from 'react';
import toast from 'react-hot-toast';




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
    <div>
      <ul>
        {isLoading && <Loader />}
        {!isLoading && Array.isArray(userArr) && userArr.map(({id, name, email, phone, position, photo}) => (
          <li key={id}>
            <UserCard
              name={name}
              email={email}
              phone={phone}
              position={position}
              photo={photo}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserCardsList

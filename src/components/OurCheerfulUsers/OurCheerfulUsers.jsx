import React, { useEffect, useState } from 'react'
import { fetchUserCards } from '../../services/api';
import UserCardsList from '../UserCardsList/UserCardsList'

const OurCheerfulUsers = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(()=>{
    async function fetchCards(){
      try {
        setIsLoading(true);
        const data = await fetchUserCards();
        setUsers(data);
      } catch (error) {
        console.log(error.message);
        setError(true);
      } finally{
        setIsLoading(false);
      }
    }
    fetchCards();
  },[]);
  const usersArr = users?.data || [];
  return (
    <div>
      <Container>
        {isLoading ? (<p>Loading...</p>) : (error ? (<p>Something is wrong!</p>) : (<UserCardsList users={usersArr}/>))}
      </Container>
    </div>
  )
}

export default OurCheerfulUsers



import { useDispatch, useSelector } from 'react-redux'
import { selectCurrentPage, selectLoader, selectTotalPages } from '../../redux/selectors'
import Button from '../Button/Button'
import Container from '../Container/Container'
import UserCardsList from '../UserCardsList/UserCardsList'
import s from "./OurCheerfulUsers.module.css"
import Loader from '../Loader/Loader'
import { fetchUserCards } from '../../redux/operations'


const OurCheerfulUsers = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector(selectCurrentPage);
  const onShowMore = ()=>{
      dispatch(fetchUserCards({page: currentPage + 1, count: 6}))
  };
  const isLoading = useSelector(selectLoader);
  const totalPages = useSelector(selectTotalPages);

  
  return (
    <div id="OurCheerfulUsers" className={s.styleSection}>
      <Container>
        <div className={s.specialContainer}>
          <h2 className={s.titleSection}>Working with GET request</h2>
          <UserCardsList />
          {console.log("isLoading:", isLoading)}
          {isLoading && <Loader/>}
          {!isLoading && currentPage < totalPages && <Button loadMoreInfo onClick={onShowMore}>Show More</Button>}
        </div>
      </Container>
    </div>
  )
}

export default OurCheerfulUsers

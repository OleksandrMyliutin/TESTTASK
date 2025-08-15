

import { useSelector } from 'react-redux'
import { selectLoader } from '../../redux/selectors'
import Button from '../Button/Button'
import Container from '../Container/Container'
import UserCardsList from '../UserCardsList/UserCardsList'
import s from "./OurCheerfulUsers.module.css"
import Loader from '../Loader/Loader'


const OurCheerfulUsers = () => {
  const isLoading = useSelector(selectLoader);
  return (
    <div id="OurCheerfulUsers" className={s.styleSection}>
      <Container>
        <div className={s.specialContainer}>
          <h2 className={s.titleSection}>Working with GET request</h2>
          <UserCardsList />
          {isLoading && <Loader/>}
          {!isLoading && <Button loadMoreInfo>Show More</Button>}
        </div>
      </Container>
    </div>
  )
}

export default OurCheerfulUsers


import Button from '../Button/Button'
import Container from '../Container/Container'
import UserCardsList from '../UserCardsList/UserCardsList'
import s from "./OurCheerfulUsers.module.css"


const OurCheerfulUsers = () => {

  return (
    <div id="OurCheerfulUsers" className={s.styleSection}>
      <Container>
        <div className={s.specialContainer}>
          <h2 className={s.titleSection}>Working with GET request</h2>
          <UserCardsList />
          <Button loadMoreInfo>Show More</Button>
        </div>
      </Container>
    </div>
  )
}

export default OurCheerfulUsers

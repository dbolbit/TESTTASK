import style from './Main.module.scss'
import Title from "../others/Title"
import UserList from "./UserList"
import Container from "../others/Container"
import {useEffect, useState} from "react"
import {api_instance} from "../../api/api_instance"
import Spinner from "../others/Spinner"
import Button from "../others/Button"
import {useDispatch, useSelector} from "react-redux"
import {fetchUsers} from "../../store/slices/usersSlice"

const Main = (props) => {
  const dispatch = useDispatch()
  const {users, page, total_pages, isLoading} = useSelector(state => state.users)

  const handlerClick = e => {
    dispatch(fetchUsers(page + 1))
  }

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])
  return (
    <Container>
      <main className={style.main_wrapper} id="users-list">
        <Title>Working with GET request</Title>
        <UserList users={users} handlerClick={handlerClick}/>
        <div style={{position: 'relative'}}>
          {isLoading ? <Spinner/> : <>{page < total_pages &&
            <Button onClick={handlerClick}>Show more</Button>}</>}
        </div>
      </main>
    </Container>
  )
}

export default Main

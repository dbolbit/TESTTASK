import style from './List.module.scss'
import Card from "../Card"
import {uid} from "uid"


const UserList = ({users}) => (
  <div className={style.wrapper}>
    {users.map(user => <Card key={uid()} data={user}/>)}
  </div>
)
export default UserList


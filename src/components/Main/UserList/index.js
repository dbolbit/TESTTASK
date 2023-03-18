import style from './List.module.css'
import Card from "../Card"
import {uid} from "uid"


const UserList = ({users}) => {


  return (
    <div className={style.wrapper}>
      {users.map(user => <Card key={uid()} data={user}/>)}
    </div>
  )
}
export default UserList


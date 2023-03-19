import style from './Card.module.scss'
import cover from '../../assets/photo-cover.svg'
import TextWithTooltip from "../../others/TextWithTooltip"
import {memo} from "react"


const Card = ({data}) => {
  const {email, name, phone, photo, position} = data

  const handlerErrorImg = e => e.target.src = cover

  return (
    <div className={style.card}>
      <img src={photo} alt="avatar" onError={handlerErrorImg}/>

      <TextWithTooltip type="name">{name}</TextWithTooltip>
      <section>
        <TextWithTooltip type="position">{position}</TextWithTooltip>
        <TextWithTooltip type="email">{email}</TextWithTooltip>
        <TextWithTooltip type="phone">{phone}</TextWithTooltip>
      </section>
    </div>
  )
}

export default Card
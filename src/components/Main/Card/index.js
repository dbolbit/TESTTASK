import style from './Card.module.scss'
import SkeletonImg from '../../assets/photo-cover.svg'
import TextWithTooltip from "../../others/TextWithTooltip"


const Card = ({data}) => {
  const {email, name, phone, photo, position} = data

  const handlerErrorImg = e => e.target.src = SkeletonImg

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
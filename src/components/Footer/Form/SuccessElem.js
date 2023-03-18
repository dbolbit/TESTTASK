import React from 'react'
import style from "../Footer.module.scss"
import successImg from "../../assets/success-image.svg"
import Title from "../../others/Title"

const SuccessElem = (props) => {

  return (
    <div className={style.success}>
      <Title>User successfully registered</Title>
      <img src={successImg} datatype="image.svg"/>
    </div>
  )
}

export default SuccessElem
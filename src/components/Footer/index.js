import style from './Footer.module.css'
import Container from "../others/Container"
import PostForm from "./Form"
import {useEffect, useState} from "react"
import Spinner from "../others/Spinner"
import SuccessElem from "./Form/SuccessElem"

const Footer = (props) => {
  const [isSending, setIsSending] = useState(false)
  const [statusForm, setStatusForm] = useState({success: false, message: ''})

  return (
    <Container>
      <footer className={style.wrapper} id="footer-form">
        {isSending ? <Spinner/> : <>{statusForm.success ? <SuccessElem/> :
          <PostForm statusForm={statusForm} setIsSending={setIsSending} setStatusForm={setStatusForm}/>}</>}
      </footer>
    </Container>
  )
}

export default Footer
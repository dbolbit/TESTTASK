import React from 'react'
import style from "./Header.module.css"
import logo from "../assets/Logo.svg"
import Button from "../others/Button"
import useScroll from "../../hooks/useScroll"

const HeaderTop = (props) => {
  const scroll = useScroll()
  return (
    <header className={style.header}>
      <div className={style.header_wrapper}>
        <img src={logo} alt="logo" height={26} width={104}/>
        <div className={style.buttons_wrapper}>
          <Button onClick={() => scroll('users-list')}>Users</Button>
          <Button onClick={() => scroll('footer-form')}>Sign Up</Button>
        </div>
      </div>
    </header>
  )
}

export default HeaderTop

// export function scrollToElement(id) {
//   const element = document.getElementById(id)
//   element.scrollIntoView({behavior: "smooth"})
// }
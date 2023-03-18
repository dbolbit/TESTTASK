import React from 'react'
import style from "./Header.module.scss"
import Container from "../others/Container"
import Title from "../others/Title"
import Button from "../others/Button"
import useScroll from "../../hooks/useScroll"

const HeaderPromo = (props) => {
  const scroll = useScroll()
  return (
    <main className={style.header_promo}>
      <div className={style.header_promo_bg}>
        <Container>
          <div className={style.promo_info_wrapper}>
            <Title style={{color: 'white'}}>Test assignment for front-end developer</Title>
            <p>What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast
              understanding of User design thinking as they'll be building web interfaces with accessibility in mind.
              They
              should also be excited to learn, as the world of Front-End Development keeps evolving.</p>
            <Button onClick={() => scroll('footer-form')}>Sign Up</Button>
          </div>
        </Container>
      </div>
    </main>
  )
}

export default HeaderPromo
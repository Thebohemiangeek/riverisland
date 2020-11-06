import React from "react"
import styled from "styled-components"
import main from '../assets/hero.jpg'
import heroweb from '../assets/heroweb.webp'
/* import Img from "gatsby-image"
 */ const Hero = ({ img, className, home, about, error }) => {
  return (
    <Container>
      <picture>
        <source srcset={heroweb}
        />
        <img src={main} alt="hero" />
      </picture>
    </Container>
  )
}

export default Hero

const Container = styled.picture`
 height: 600px;
 width: 100vw;
 img{
   width:100%;
   background-position: bottom;
   height:90.5vh;
   object-fit: cover;
 }
`

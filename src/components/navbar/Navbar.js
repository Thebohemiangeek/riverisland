import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/logo.png'
const Navbar = ({ children }) => {
    return (
        <Bar>
            <Logo>
                <img src={logo} alt="riverisland" />     </Logo><Links>{children}</Links></Bar>
    )
}

export default Navbar

const Logo = styled.div`
display: flex;
flex-direction: row;

img{
    height: 50px;
}
`
const Bar = styled.nav`
display: flex;
justify-content: space-between;
flex-direction: row;
align-items: center;
height: 100px;

`
const Links = styled.ul`
display: flex;
justify-content: space-between;
flex-direction:row;
a{
    color: black;
}
li{
    font-family: 'Oswald', sans-serif;
margin: 0 10px;
font-size: 24px;

}
`
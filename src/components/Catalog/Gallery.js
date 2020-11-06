import React from 'react'
import styled from 'styled-components'

const Gallery = ({ children }) => {
    return (
        <Container>
            {children}
        </Container>
    )
}

export default Gallery
const Container = styled.div`
width:100%;
display: flex;
flex-flow:row;  
flex-wrap: wrap;
justify-content: space-around;
ul{
    margin: 20px;
   
    li {
        list-style-type: none;font-size: 20px ;
       
    }
}
`
import React from 'react'
import styled from 'styled-components'
import pics from "../../../assets/image-header (2).jpg"

export const Hero = () => {
  return (
    <Container>
        <Text>WE ARE CREATIVES</Text>
        <Image src={pics} />
        
    </Container>
  )
}

const Image = styled.img`
width: 100%;
height: auto;
object-fit: contain;
`

const Text = styled.div`
font-size: 54px;
font-weight: 900;
position: relative;
margin-top: 50px;
`
const Container = styled.div`
background-color: #3EBFFF;
width: 100%;
color: white;
display:  flex;
flex-direction: column;
align-items: center;
height: auto;

`

export default Hero;
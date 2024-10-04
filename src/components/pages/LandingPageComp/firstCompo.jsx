import React from 'react'
import styled from 'styled-components'
import pics from "../../../assets/image-transform (1).jpg"



const FirstComponents = () => {
    return (
      <Container>
        <Left>
          <MainLeft>
            <BigText>Transform your Brand</BigText>
            <SmallText>We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.</SmallText>
            <LearnMore>Learn More</LearnMore>
          </MainLeft>
        </Left>
  
        <Right>
          <Image src={pics} alt='Image' />
        </Right>
      </Container>
    )
  }
  

  
const Image = styled.img`
object-fit: cover;
width: 100%;
height: 100%;
`
const Right = styled.div`
width : 50% ;
height: 100%;
background-color: yellow;
`

const LearnMore = styled.div`
text-transform: uppercase;
font-weight: 700;
text-decoration: underline;
text-decoration-color: yellow;
text-decoration-thickness: 2px;
`

const SmallText = styled.div`
margin: 20px 0px;
font-weight: 500;
`
const BigText = styled.div`
font-size: 40px;
font-weight: 800;
`
const MainLeft = styled.div`
width: 60%;
`

const Left = styled.div`
width : 50% ;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100%;
/* background-color: green; */
`

const Container = styled.div`
width: 100%;
height: 600px;
display: flex;
`
  export default FirstComponents
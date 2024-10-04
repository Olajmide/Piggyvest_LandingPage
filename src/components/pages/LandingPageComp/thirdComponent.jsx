import React from 'react';
import styled from 'styled-components';
import pics from "../../../assets/image-graphic-design (2).jpg";
import pics1 from "../../../assets/image-photography (4).jpg";

const ThirdComponents = () => {
    return (
        <Container>
          <ImageContainer>
            <Image src={pics} alt="Graphic Design" />
            <TextOverlay>
              <BigText>Graphic Design</BigText> 
              <SmallText>
                Great design makes you memorable. We deliver artwork that underscores 
                your brand message and captures potential clients’ attention.
              </SmallText>
            </TextOverlay>
          </ImageContainer>

          <ImageContainer>
            <Image src={pics1} alt="Photography" />
            <TextOverlay>
              <BigText>Photography</BigText>
              <SmallText>
                Increase your credibility by getting the most stunning, high-quality 
                photos that improve your business image.
              </SmallText>
            </TextOverlay>
          </ImageContainer>
        </Container>
    );
};


const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 50%;
  height: 100%;
`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const TextOverlay = styled.div`
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  
  padding: 20px;
  border-radius: 10px;
`;

const BigText = styled.div`
  font-size: 40px;
  font-weight: 800;
  text-transform: capitalize; /* Ensure the same capitalization style as your image */
  white-space: nowrap;
  color: #4E8376; 
`;

const SmallText = styled.div`
  margin: 20px 0;
  font-weight: 500;
  font-size: 16px;
  color: #25564B; 
`;

export default ThirdComponents;

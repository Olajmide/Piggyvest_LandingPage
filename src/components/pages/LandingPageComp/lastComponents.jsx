import React from 'react';
import styled from 'styled-components';
import pics from "../../../assets/image-gallery-milkbottles (6).jpg";
import pics1 from "../../../assets/image-gallery-orange (2).jpg";
import pics2 from "../../../assets/image-gallery-cone (2).jpg";
import pics3 from "../../../assets/image-gallery-sugarcubes (2).jpg";

const LastComponents = () => {
  return (
    <Container>
      <ImageContainer>
        <Image src={pics} alt="Image" />
        <Image src={pics1} alt="Image" />
        <Image src={pics2} alt="Image" />
        <Image src={pics3} alt="Image" />
      </ImageContainer>
    </Container>
  );
};


const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ImageContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-wrap: nowrap;
`;

const Image = styled.img`
  width: 25%; 
  height: auto;
  object-fit: cover; 
  padding: 0;
  margin: 0;
  border: none; 
`;

export default LastComponents;

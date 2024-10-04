import React from "react";
import styled from "styled-components";
import pics from "../../assets/image fb.png";
import pics1 from "../../assets/imageig.png";
import pics2 from "../../assets/imagex.png";
import pics3 from "../../assets/image.png";

const Footer = () => {
  return (
    <Container>
      <Logo>sunnyside</Logo>

      <Navs>
        <SubNavs>About</SubNavs>
        <SubNavs>Services</SubNavs>
        <SubNavs>Projects</SubNavs>
      </Navs>

      <Images>
        <Image src={pics} alt="Facebook" />
        <Image src={pics1} alt="Instagram" />
        <Image src={pics2} alt="X" />
        <Image src={pics3} alt="Other" />
      </Images>
    </Container>
  );
};


const Images = styled.div`
  display: flex;
  width: 20%;
  justify-content: space-evenly; 
`;

const Image = styled.img`
  width: 25px; 
  height: 25px; 
  object-fit: cover; 
  filter: brightness(0) invert(1);

  
  &:hover {
    filter: brightness(0) invert(1); 
  }

  transition: filter 0.3s ease; 
`;

const SubNavs = styled.div``;

const Navs = styled.div`
  display: flex;
  justify-content: space-between;
  width: 30%;
  font-weight: 500;
  margin-top: 25px;
  margin-bottom: 50px;
`;

const Logo = styled.div`
  font-weight: 700;
  font-size: 25px;
`;

const Container = styled.div`
  width: 100%;
  height: 200px;
  background-color: #1fe1d7;
  color: #13736e;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Footer;

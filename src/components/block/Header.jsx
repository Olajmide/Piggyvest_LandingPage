import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const onToggled = () => {
    setToggle(!toggle);
    console.log(toggle, "toggle");
  };

  return (
    <Container>
      <Main>
        <Logo onClick={onToggled}>SunnySide</Logo>
        <Navs>
          <Navs to="/about">About</Navs>
          <Navs to="/services">Services</Navs>
          <Navs to="/projects">Projects</Navs>
          <Button to="/sign-in">Contact</Button>
        </Navs>
      </Main>
    </Container>
  );
};


const Container = styled.div`
  height: 85px;
  width: 100%;
  background-color: #3EBFFF;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

const Main = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: 800;
  cursor: pointer;
`;

const Navs = styled.div`
  width: 37%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled(Link)`
  padding: 12px 22px;
  background-color: white;
  color: black;
  border-radius: 30px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background-color: yellow;
    color: black;
  }
`;

export default Header;

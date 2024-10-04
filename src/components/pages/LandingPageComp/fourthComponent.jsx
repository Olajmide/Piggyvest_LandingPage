import React from 'react';
import styled from 'styled-components';
import pics from "../../../assets/image-emily (21).jpg";
import pics1 from "../../../assets/image-thomas (1).jpg";
import pics2 from "../../../assets/image-jennie (1).jpg";

const FourthComponents = () => {
  return (
    <Container>
      <Main>
        <Testimonial>
          Client Testimonials
        </Testimonial>
        <Images>
          <Card>
            <Image src={pics} alt='Image' />
            <TextOverlay>
              <BigText>
                We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.
              </BigText>
              <SmallText>Emily R.</SmallText>
              <SmallText1>Marketing Director</SmallText1>
            </TextOverlay>
          </Card>

          <Card>
            <Image src={pics1} alt='Image' />
            <TextOverlay>
              <BigText>
                Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.
              </BigText>
              <SmallText>Thomas S.</SmallText>
              <SmallText1>Chief Operating Officer</SmallText1>
            </TextOverlay>
          </Card>

          <Card>
            <Image src={pics2} alt='Image' />
            <TextOverlay>
              <BigText>
                Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!
              </BigText>
              <SmallText>Jennie F.</SmallText>
              <SmallText1>Business Owner</SmallText1>
            </TextOverlay>
          </Card>
        </Images>
      </Main>
    </Container>
  );
};

// Styled components
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
  background-color: #fdf9f5; /* Match background color */
`;

const Main = styled.div`
  max-width: 1200px;
  width: 100%;
  text-align: center;
`;

const Testimonial = styled.h2`
  font-size: 24px;
  color: #bbb9b5;
  font-weight: 600;
  margin-bottom: 50px;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

const Images = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Card = styled.div`
  width: 30%;
  text-align: center;
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
`;

const TextOverlay = styled.div`
  margin-top: 10px;
`;

const BigText = styled.div`
  font-size: 14px;
  color: #4e5d56;
  margin-bottom: 20px;
`;

const SmallText = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #3d3d3d;
  margin-bottom: 5px;
`;

const SmallText1 = styled.div`
  font-size: 14px;
  color: #8d8c8a;
`;

export default FourthComponents;

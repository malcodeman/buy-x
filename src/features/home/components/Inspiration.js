import React, { cloneElement } from "react";
import { compose } from "redux";
import styled, { withTheme } from "styled-components";

import { INSPIRATIONS } from "../constants/homeConstants";
import Text from "../../commonComponents/Text";

const Wrapper = styled.section`
  padding: 4rem 2rem;
  margin: 0 auto;
  max-width: 1200px;
`;

const Grid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(1, 1fr);
  grid-template-areas:
    "text"
    "creative"
    "marketing"
    "product"
    "project";
  @media (min-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
      "text text"
      "creative marketing"
      "product project";
  }
  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas:
      "creative marketing text"
      "product project text";
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(5, 1fr);
    grid-template-areas: "creative marketing product project text";
  }
`;

const TextWrapper = styled.div`
  grid-area: text;
  @media (min-width: 992px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const Heading = styled.h2`
  font-size: 2rem;
  font-weight: 500;
  line-height: 1.25;
  margin-bottom: 1rem;
  color: ${props => props.theme.primary};
`;

const Subheading = styled.h3`
  font-size: 1.2rem;
  font-weight: 400;
  color: ${props => props.theme.secondary};
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 14px;
  background-color: transparent;
  cursor: pointer;
  transition: ${props => props.theme.transitions.easeIn};
  &:hover {
    box-shadow: 0 0 0 10px hsla(0, 0%, 0%, 0.05);
    background-color: hsla(0, 0%, 0%, 0.05);
  }
  &:nth-child(2) {
    grid-area: creative;
  }
  &:nth-child(3) {
    grid-area: marketing;
  }
  &:nth-child(4) {
    grid-area: product;
  }
  &:nth-child(5) {
    grid-area: project;
  }
`;

const CardCover = styled.div`
  display: flex;
  height: 180px;
  margin-bottom: 1rem;
  padding: 1rem;
  border-radius: 14px;
  @media (min-width: 1200px) {
    height: 300px;
  }
  background-color: ${props => `${props.theme.brand}33`};
`;

function Inspiration(props) {
  const { theme } = props;

  return (
    <Wrapper>
      <Grid>
        <TextWrapper>
          <Heading>Inspiration for every team</Heading>
          <Subheading>
            Get started fast with templates built by industry experts.
          </Subheading>
        </TextWrapper>
        {INSPIRATIONS.map(inspiration => (
          <Card key={inspiration.id}>
            <CardCover>
              {cloneElement(inspiration.cover, { color: theme.brand })}
            </CardCover>
            <Text strong upperCase letterSpacing={0.1}>
              {inspiration.text}
            </Text>
          </Card>
        ))}
      </Grid>
    </Wrapper>
  );
}

export default compose(withTheme)(Inspiration);

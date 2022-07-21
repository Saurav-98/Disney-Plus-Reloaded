import React from "react";
import styled from "styled-components";

const Movies = () => {
  return (
    <MoviesContainer>
      <h4>Recommended for You</h4>
      <Content>
        <Wrap>
          <img
            src="https://lumiere-a.akamaihd.net/v1/images/p_onward_19732_09862641.jpeg?region=0%2C0%2C540%2C810"
            alt="demo movie"
          />
        </Wrap>
        <Wrap>
          <img
            src="https://lumiere-a.akamaihd.net/v1/images/p_onward_19732_09862641.jpeg?region=0%2C0%2C540%2C810"
            alt="demo movie"
          />
        </Wrap>
        <Wrap>
          <img
            src="https://lumiere-a.akamaihd.net/v1/images/p_onward_19732_09862641.jpeg?region=0%2C0%2C540%2C810"
            alt="demo movie"
          />
        </Wrap>
        <Wrap>
          <img
            src="https://lumiere-a.akamaihd.net/v1/images/p_onward_19732_09862641.jpeg?region=0%2C0%2C540%2C810"
            alt="demo movie"
          />
        </Wrap>
        <Wrap>
          <img
            src="https://lumiere-a.akamaihd.net/v1/images/p_onward_19732_09862641.jpeg?region=0%2C0%2C540%2C810"
            alt="demo movie"
          />
        </Wrap>
        <Wrap>
          <img
            src="https://lumiere-a.akamaihd.net/v1/images/p_onward_19732_09862641.jpeg?region=0%2C0%2C540%2C810"
            alt="demo movie"
          />
        </Wrap>
        <Wrap>
          <img
            src="https://lumiere-a.akamaihd.net/v1/images/p_onward_19732_09862641.jpeg?region=0%2C0%2C540%2C810"
            alt="demo movie"
          />
        </Wrap>
        <Wrap>
          <img
            src="https://lumiere-a.akamaihd.net/v1/images/p_onward_19732_09862641.jpeg?region=0%2C0%2C540%2C810"
            alt="demo movie"
          />
        </Wrap>
      </Content>
    </MoviesContainer>
  );
};

export default Movies;

const MoviesContainer = styled.section`
  padding-block: 2rem;
`;

const Content = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;
const Wrap = styled.div`
  border-radius: 0.6rem;
  overflow: hidden;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgba(0, 0, 0, 0.68) 0px 26px 30px -10px,
    rgba(0, 0, 0, 0.72) 0px 16px 10px -10px;
  transition: all 0.25s linear;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    box-shadow: rgba(0, 0, 0, 0.8) 0px 40px 58px -16px,
      rgba(0, 0, 0, 0.72) 0px 30px 22px -10px;
  }
`;

import React from "react";
import styled from "styled-components";

const Viewers = () => {
  return (
    <ViewesrContainer>
      <Wrap>
        <img src="./images/viewers-disney.png" alt="disney viewers" />
      </Wrap>
      <Wrap>
        <img src="./images/viewers-marvel.png" alt="marvel viewers" />
      </Wrap>
      <Wrap>
        <img src="./images/viewers-pixar.png" alt="pixar viewers" />
      </Wrap>
      <Wrap>
        <img src="./images/viewers-starwars.png" alt="starwars viewers" />
      </Wrap>
      <Wrap>
        <img src="./images/viewers-national.png" alt="national viewers" />
      </Wrap>
    </ViewesrContainer>
  );
};

export default Viewers;

const ViewesrContainer = styled.section`
  margin-top: 2rem;
  display: grid;
  padding: 2rem;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 1rem;
`;

const Wrap = styled.div`
  border: 3px solid rgba(249, 249, 249, 0.1);
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.68) 0px 26px 30px -10px,
    rgba(0, 0, 0, 0.72) 0px 16px 10px -10px;
  cursor: pointer;
  transition: all 0.25s linear;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;

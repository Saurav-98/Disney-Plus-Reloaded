import React from "react";
import styled from "styled-components";
import ImageSlider from "./ImageSlider";
import Movies from "./Movies";
import Viewers from "./Viewers";

const Home = () => {
  return (
    <MainContainer>
      <ImageSlider />
      <Viewers />
      <Movies />
    </MainContainer>
  );
};

export default Home;

const MainContainer = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;

  &::before {
    content: "";
    background: url("./images/home-background.png") center center/cover
      no-repeat fixed;
    position: absolute;
    z-index: -1;
    inset: 0;
  }
`;

import React from "react";
import styled from "styled-components";
const Login = () => {
  return (
    <LogInContainer>
      <CTA>
        <CTALogoOne src="./images/cta-logo-one.svg" />
        <SignUpButton>Get All There</SignUpButton>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim,
          aliquam perferendis. Maiores facilis, nam reiciendis repellendus enim
          consequuntur soluta suscipit libero reprehenderit.
        </Description>
        <CTALogoTwo src="./images/cta-logo-two.png" />
      </CTA>
    </LogInContainer>
  );
};

export default Login;

const LogInContainer = styled.div`
  position: relative;
  height: calc(100vh - 70px);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  &::before {
    position: absolute;
    content: "";
    inset: 0;
    background: url("./images/login-background.jpg") center center/cover
      no-repeat;
    z-index: -1;
    opacity: 0.7;
  }
`;

const CTA = styled.div`
  max-width: 650px;
  padding: 5rem 3rem;
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const CTALogoOne = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
const CTALogoTwo = styled(CTALogoOne)``;

const SignUpButton = styled.a`
  width: 100%;
  background-color: #0063e5;
  font-weight: bold;
  text-align: center;
  padding: 0.6rem 0;
  color: #f9f9f9;
  border-radius: 4px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 250ms;
  letter-spacing: 1.5px;
  text-transform: uppercase;

  &:hover {
    background-color: #0483ee;
  }
`;

const Description = styled.p`
  line-height: 1.5;
  font-size: 0.8rem;
  letter-spacing: 1.4px;
  text-align: center;
`;

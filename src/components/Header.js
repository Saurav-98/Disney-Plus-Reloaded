import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderContainer>
      <DisneyLogo src="/images/logo.svg" />
      <NavMenu>
        <a href="/home">
          <img src="/images/home-icon.svg" alt="home" />
          <span>HOME</span>
        </a>
        <a href="/search">
          <img src="/images/search-icon.svg" alt="search" />
          <span>SEARCH</span>
        </a>
        <a href="/movie">
          <img src="/images/movie-icon.svg" alt="movie" />
          <span>MOVIES</span>
        </a>
        <a href="/original">
          <img src="/images/original-icon.svg" alt="original" />
          <span>ORIGINALS</span>
        </a>
        <a href="/series">
          <img src="/images/series-icon.svg" alt="series" />
          <span>SERIES</span>
        </a>
        <a href="/watchlist">
          <img src="/images/watchlist-icon.svg" alt="watchlist" />
          <span>WATCHLIST</span>
        </a>
      </NavMenu>
      <UserProfile src="./images/user1.jpg" />
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  background-color: var(--disney-dark);
  display: flex;
  align-items: center;
  padding: 0 4rem;
  height: 70px;
`;

const DisneyLogo = styled.img`
  width: 60px;
  margin-bottom: 0.5rem;
  margin-right: 2rem;
`;
const NavMenu = styled.nav`
  display: flex;
  margin-right: auto;
  flex: 1;
  a {
    display: flex;
    align-items: flex-start;
    margin-inline: 0.5rem;
    cursor: pointer;
    img {
      height: 20px;
      margin-right: 0.2rem;
    }
    span {
      font-size: 0.8rem;
      position: relative;

      &::after {
        content: "";
        background-color: #f9f9f9;
        height: 2px;
        position: absolute;
        bottom: -0.4rem;
        left: 0;
        right: 0;
        opacity: 0;
        transform: scaleX(0);
        transform-origin: left center;
        transition: all 0.4s linear;
      }
    }

    &:hover {
      span:after {
        opacity: 1;
        transform: scaleX(1.1);
      }
    }
  }
`;
const UserProfile = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: contain;
  cursor: pointer;
`;

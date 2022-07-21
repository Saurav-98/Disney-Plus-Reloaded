import React from "react";
import styled from "styled-components";

const Details = () => {
  return (
    <DetailsContainer>
      <BackGround>
        <img
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5298bac0-b8bf-4c80-af67-725c1272dbb0/df7tzmz-a8637a1c-c01a-4011-ae41-47f500be9f4b.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzUyOThiYWMwLWI4YmYtNGM4MC1hZjY3LTcyNWMxMjcyZGJiMFwvZGY3dHptei1hODYzN2ExYy1jMDFhLTQwMTEtYWU0MS00N2Y1MDBiZTlmNGIuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.-JcyI61EoVR8CbpYpJIjGi9S83pOwQG9gU_JX2vF5Zk"
          alt="background movie"
        />
      </BackGround>
      <DetailsInfo>
        <ImageTitle>
          <img
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/846a9086-8a40-43e0-aa10-2fc7d6d73730/deaml8h-951ead38-2ff8-4206-9cb5-3744b808bf21.png/v1/fill/w_1280,h_667,strp/thor_love_and_thunder_logo_png__by_mintmovi3_deaml8h-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjY3IiwicGF0aCI6IlwvZlwvODQ2YTkwODYtOGE0MC00M2UwLWFhMTAtMmZjN2Q2ZDczNzMwXC9kZWFtbDhoLTk1MWVhZDM4LTJmZjgtNDIwNi05Y2I1LTM3NDRiODA4YmYyMS5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.7DBam_C7z2gWAgOK_NaXnsim30zdxNz1WhOGiwzWDpg"
            alt="title movie"
          />
        </ImageTitle>
        <Controls>
          <PlayButton>
            <img src="./images/play-icon-black.png" alt="play icon" />
            <span>PLAY</span>
          </PlayButton>
          <TrailerButton>
            <img src="./images/play-icon-white.png" alt="Trailer icon" />
            <span>TRAILER</span>
          </TrailerButton>
          <AddButton>
            <span>+</span>
          </AddButton>
          <GroupWatchButton>
            <img src="./images/group-icon.png" alt="group icon" />
          </GroupWatchButton>
        </Controls>
        <SubTitleText>1 hr 58 min • 2022 • PG-13 </SubTitleText>
        <DescriptonText>
          Thor enlists the help of Valkyrie, Korg and ex-girlfriend Jane Foster
          to fight Gorr the God Butcher, who intends to make the gods extinct.
        </DescriptonText>
      </DetailsInfo>
    </DetailsContainer>
  );
};

export default Details;

const DetailsContainer = styled.section`
  min-height: calc(100vh-70px);
  position: relative;
  overflow: hidden;
`;

const BackGround = styled.div`
  position: fixed;

  top: 70px;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: -1;
  opacity: 0.7;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const DetailsInfo = styled.div`
  background-color: rgba(0, 0, 0, 0.25);
  z-index: -1;
  padding: 0 calc(3.5vw + 5px);
  position: fixed;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-bottom: 15rem;
  overflow-y: hidden;
  width: 100%;
`;
const ImageTitle = styled.div`
  height: 30vh;
  min-height: 170px;
  width: 35vw;
  min-width: 200px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

const PlayButton = styled.button`
  border-radius: 0.25rem;
  font-size: 1rem;
  display: flex;
  align-items: center;
  padding: 0.4rem 1.2rem;
  background-color: rgb(249, 249, 249);
  border: none;
  letter-spacing: 1.8px;
  cursor: pointer;

  span {
    margin-top: 4px;
  }

  &:hover {
    background-color: rgb(198, 198, 198);
  }
`;
const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
`;
const AddButton = styled.button`
  width: 44px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
  border: #f9f9f9;
  background-color: #191919;
  transition: all 0.25s linear;

  span {
    font-size: 2rem;
    color: white;
  }
  &:hover {
    border: rgba(0, 0, 0, 0.6);
    background-color: rgba(249, 249, 249, 0.8);
    span {
      color: rgba(0, 0, 0, 0.8);
    }
  }
`;
const GroupWatchButton = styled(AddButton)`
  background-color: #191919;

  &:hover {
    background-color: rgba(0, 0, 0, 0.4);
  }
`;

const SubTitleText = styled.div`
  color: rgb(249, 249, 249);
  min-height: 1rem;
  font-size: 1rem;
`;
const DescriptonText = styled.div`
  line-height: 1.4;
  font-size: 1.3rem;
  max-width: 500px;
`;

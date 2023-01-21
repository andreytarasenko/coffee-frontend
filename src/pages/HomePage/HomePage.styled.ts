import styled from 'styled-components/macro';

export const HomePageStyled = styled.div``;

export const HeroImageWrapStyled = styled.div<{ imgUrl: string }>`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  background-image: ${({ imgUrl }) => `url(${imgUrl})`};
  background-position: top center;
  background-repeat: no-repeat;
`;

export const TopMenuWrapStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
`;

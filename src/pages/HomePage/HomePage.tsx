import Button from '../../components/Button/Button';
import React from 'react';
import IconContainer from '../../components/IconContainer/IconContainer';
import { PageLimiterStyled } from '../../components/PageLimiter/PageLimiter.styled';
import NavMenu from './components/NavMenu/NavMenu';
import {
  HeroImageWrapStyled,
  HomePageStyled,
  TopMenuWrapStyled,
} from './HomePage.styled';

const HomePage: React.FC = () => {
  return (
    <HomePageStyled>
      <HeroImageWrapStyled imgUrl="/src/assets/images/landing-hero.jpg" />
      <PageLimiterStyled>
        <TopMenuWrapStyled>
          <IconContainer
            width={95}
            height={78}
            src="/src/assets/images/logo.png"
          />
          <NavMenu />
          <Button text="Book Now" variant="primary" onClick={() => {}} />
        </TopMenuWrapStyled>
      </PageLimiterStyled>
    </HomePageStyled>
  );
};

export default HomePage;

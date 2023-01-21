import React from 'react';
import {
  NavMenuStyled,
  NavMenuListStyled,
  NavLinkStyled,
} from './NavMenu.styled';

const NavMenu: React.FC = () => {
  return (
    <NavMenuStyled>
      <NavMenuListStyled>
        <NavLinkStyled>Home</NavLinkStyled>
        <NavLinkStyled>About</NavLinkStyled>
        <NavLinkStyled>Menu</NavLinkStyled>
        <NavLinkStyled isUpperCase>Reservation</NavLinkStyled>
        <NavLinkStyled>Shop</NavLinkStyled>
        <NavLinkStyled>Contacts</NavLinkStyled>
      </NavMenuListStyled>
    </NavMenuStyled>
  );
};

export default NavMenu;

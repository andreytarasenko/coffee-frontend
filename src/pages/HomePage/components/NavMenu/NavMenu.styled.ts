import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

export const NavMenuStyled = styled.nav``;

export const NavMenuListStyled = styled.ul`
  display: flex;
  gap: 24px 0;

  ${({ theme }) => `
    ${theme.devices.tabletAndDesktop} {
      gap: 0 40px;
    }
  `}
`;

export const NavLinkStyled = styled(Link)<{ isUpperCase?: boolean }>`
  ${({ theme, isUpperCase }) => `
    color: ${theme.color.primary.primary0};
    font-family: ${theme.fontFamily.tertiary};
    font-size: ${theme.fontSize.medium};
    font-weight: ${theme.fontWeight.semibold}; 
    text-transform: ${isUpperCase ? 'uppercase' : 'none'};

    :hover {
      color: ${theme.color.primary.primary100};
    }
  `}
`;

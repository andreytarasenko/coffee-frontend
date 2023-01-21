import styled from 'styled-components/macro';

export type ButtonStylesT = {};

export const ButtonStyled = styled.button<ButtonStylesT>`
  padding: 15px 16px;
  border-radius: 6px;

  ${({ theme }) => `
    font-family: ${theme.fontFamily.primary};
    font-size: ${theme.fontSize.medium};
    font-weight: ${theme.fontWeight.medium};
  `}
`;

export const ButtonPrimaryStyled = styled(ButtonStyled)`
  color: ${({ theme }) => theme.color.primary.primary0};
  background-color: ${({ theme }) => theme.color.primary.primary100};
`;

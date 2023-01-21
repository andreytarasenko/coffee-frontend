import React from 'react';
import { ButtonPrimaryStyled, ButtonStyled } from './Button.styled';

export type ButtonVariantT = 'primary' | 'secondary';

export type ButtonPropT = {
  text: string;
  variant: ButtonVariantT;
  onClick: () => void;
};

const Button: React.FC<ButtonPropT> = (props) => {
  const { variant, text = '' } = props;
  if (variant === 'primary') {
    return (
      <ButtonPrimaryStyled onClick={props.onClick}>{text}</ButtonPrimaryStyled>
    );
  }

  return null;
};

export default Button;

import React from 'react';
import { IconContainerStyled } from './IconContainer.styled';

export type IconContainerPropT = {
  width?: number;
  height?: number;
  src: string;
};

const IconContainer: React.FC<IconContainerPropT> = ({
  src,
  width = 20,
  height = 20,
}) => {
  return (
    <IconContainerStyled width={width} height={height}>
      <img src={src} />
    </IconContainerStyled>
  );
};

export default IconContainer;

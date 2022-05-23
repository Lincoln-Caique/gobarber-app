import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, ...res }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Container type="button" {...res}>
    {children}
  </Container>
);

export default Button;

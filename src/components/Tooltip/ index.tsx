import React from 'react';

import { Container } from './styles';

interface ToolltipProps {
  title: string;
  // eslint-disable-next-line react/require-default-props
  children: any;
  // eslint-disable-next-line react/require-default-props
  className?: string;
}

// eslint-disable-next-line prettier/prettier
const Tooltip: React.FC<ToolltipProps> = ({ title, className = '', children }) => {
  return (
    <Container className={className}>
      {children}
      <span>{title}</span>
    </Container>
  );
};

export default Tooltip;

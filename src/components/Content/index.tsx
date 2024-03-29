/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable prettier/prettier */
/* eslint-disable react/function-component-definition */
import React, {ReactNode} from 'react';
import { Container } from './styles';

export const Content: React.FC<{ children: ReactNode }> = ({children}) => {
  return (
    <Container>
      <>{children}</>
    </Container>
  );
};

export default Content;

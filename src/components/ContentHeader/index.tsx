/* eslint-disable react/function-component-definition */
import React from 'react';

import { Container, TitleContainer, Controllers } from './styles';

interface IContentHeaderProps {
  title: string;
  lineColor: string;
  children: React.ReactNode;
}

export const ContentHeader: React.FC<IContentHeaderProps> = ({
  title,
  lineColor,
  children
}) => {
  return (
    <Container>
      <TitleContainer lineColor={lineColor}>
        <h1>{title}</h1>
      </TitleContainer>

      <Controllers>{children}</Controllers>
    </Container>
  );
};

export default ContentHeader;

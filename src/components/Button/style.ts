/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  margin: 7px 0;
  padding: 10px;
  border-radius: 50px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.warning};
  transition: opacity 0.3s;
  border: 0;
  font-size: 1rem;
  &:hover {
    opacity: 0.7;
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  width: 48%;

  background-color: ${(props) => props.theme.colors.tertiary};
  color: ${(props) => props.theme.colors.white};
  border-radius: 0.5rem;

  margin: 0.5rem 0;
  padding: 2rem 0.5rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > header img {
    width: 2rem;
    margin-left: 1rem;

  }

  > header p {
    font-size: 1.8rem;
    margin-bottom: 3rem;
  }
`;

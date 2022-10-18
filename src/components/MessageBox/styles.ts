import styled, {keyframes} from 'styled-components';

const animate = keyframes`
    0% {
        transform: translateX(-100px);
        opacity: 0;
    }
    50%{
        opacity: .3;
    }
    100%{
        transform: translateX(0px);
        opacity: 1;
    }
`;

export const Container = styled.div`
  width: 49%;

  background-color: ${(props) => props.theme.colors.tertiary};
  color: ${(props) => props.theme.colors.white};
  border-radius: 0.5rem;

  margin: 0.5rem 0;
  padding: 2rem 0.5rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  animation: ${animate} .5s;
    > header img {
        width: 35px;
        margin-left: 7px;
    }
    > header p {
        font-size: 18px;
    }

  > header img {
    width: 2rem;
    margin-left: 1rem;

  }

  > header p {
    font-size: 1.8rem;
    margin-bottom: 3rem;
  }

  @media(max-width: 770px){
    width: 100%;
    
    > header h1 {
        font-size: 24px;
        img {
          height: 20px;
          width: 20px;
        }
    }
    > header p, > footer span {
        font-size: 14px;
    }
  }
  @media(max-width: 420px){
    width: 100%;
    height: auto;
    > header p {
      margin-bottom: 15px;
    }
  }
`;

import styled from "styled-components";

interface IContainerProps {
    color: string;
}

export const Container = styled.div<IContainerProps>`
    width: 32%;
    height:12rem;
    margin:1rem 0;
    background-color:${props => props.color};
    color:${props => props.theme.colors.white};

    border-radius: 1rem;
    padding: 0.5rem 1rem;
    position: relative;
    overflow: hidden;

    > img {
        height: 110%;
        position: absolute;
        top:-1rem;
        right:-2rem;
        opacity: 0.3;
    }

    > span {
        font-size: 2rem;
       
    }

    > small {
        font-size: 1rem;
        position: absolute;
        bottom: 0.5rem;
    }

`


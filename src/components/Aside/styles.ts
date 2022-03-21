import styled from "styled-components";

export  const Container = styled.div`
    grid-area: AS;
    color: ${props => props.theme.colors.white};
    padding-left: 2rem;
    background-color: ${props => props.theme.colors.secondary};
    border-right: 1px solid ${props => props.theme.colors.gray};

`

export const Header = styled.header`
    height: 70px;
    display: flex;
    align-items: center;
`

export const LogImg = styled.img`
    height: 2.5rem;
`

export const Title = styled.h3`
    color: ${props => props.theme.colors.white};
    margin-left: 10px;
`

export const MenuContainer = styled.nav`
    display: flex;
    flex-direction: column;

    margin-top: 50px;
`

export const MenuItemLink = styled.a`
    display: flex;
    align-items: center;

    color: ${props => props.theme.colors.info};
    text-decoration: none;
    margin: 7px 0;
    transition: opacity .3s;

    &:hover{
        opacity: .7;
    }

    > svg {
        font-size:1rem;
        margin-right: 1rem;
    }
`
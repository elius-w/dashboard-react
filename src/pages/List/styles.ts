import styled from "styled-components";

export const Container = styled.div``

export const Content = styled.div``

export const Filters = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 30px;    

    .tag-filter{
        font-size: 1rem;
        font-weight: 500;
        background: none;
        border: 0;
        color: ${props => props.theme.colors.white};
        margin: 0 10px;
        transition: opacity .3s;

        &:hover{
            opacity: .7;
        }

    }

    .tag-filter-recurrent::after{
        content: '';
        display: block;
        width: 55px;
        margin: 8px auto 0 auto;
        border-bottom: 10px solid ${props => props.theme.colors.warning};
        
    }

    .tag-filter-eventual::after{
        content: '';
        display: block;
        width: 55px;
        margin: 8px auto 0 auto;
        border-bottom: 10px solid ${props => props.theme.colors.success};
    }

`
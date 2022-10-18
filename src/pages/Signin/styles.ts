import styled from 'styled-components'

export const Container = styled.div`
    height: 100vh;
    
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.colors.primary};
`;

export const Logo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;
    > h2 {
        color: ${props => props.theme.colors.white}; 
        margin-top: 7px;;
    }
    > img {
        width: 40px;
        height: 40px;
        border-radius: 50px;
    }
`;

export const Form = styled.form`
    width: 300px;
    padding: 30px;
    border-radius: 30px;
    background-color: ${props => props.theme.colors.tertiary};
    box-shadow: 0px 5px 13px 7px #0000001f;

    svg{
        margin-right: 5px;
    }
    
    h3{
        display: flex;        
        justify-content:center;
        color: #ebe168;
        border: 1px solid #ebe168;
        padding: 0.5rem;
        font-size: 0.8rem;
        text-transform: uppercase;
        padding:0.5rem;
        border-radius: 50px;
        margin-bottom: 0.5rem;
    }
`;

export const FormTitle = styled.h1`
    margin-bottom: 20px;
    color: ${props => props.theme.colors.white}; 
    &:after {
        content: '';
        display: block;
        width: 55px;
        border-bottom: 10px solid ${props => props.theme.colors.warning};  
    }
`;

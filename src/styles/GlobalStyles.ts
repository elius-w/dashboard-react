import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
   * {
       margin:0;
       padding:0;
       box-sizing:border-box;
   }

   html, body, #root {
       height:100%;
   }

   * :no-button, input{
       border: 0;
       outline: 0;
   }

   body{
    font-family: 'Roboto', sans-serif;
    font-size: 0.9rem;

   }

   button{
       cursor:pointer;
   }
`;

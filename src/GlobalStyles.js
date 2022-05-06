import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    font-family: 'Atkinson Hyperlegible', sans-serif;
    font-weight: 700;
}


#root{
    
    display: flex ;
    justify-content: space-around;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    
    
    
}
body{
    margin:0;
    padding: 0; ;
}
`;

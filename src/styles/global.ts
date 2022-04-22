import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    box-sizing:border-box;
    margin:0;
    padding: 0;
}
html,body #root {
    width: 100vw;
    height: 100vh;
}
body{
   font-family: 'Roboto', sans-serif;
   overflow-x: hidden;
   background: ${({ theme }) => theme.colors.background};
}
`;

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root{
    --Body-background: white;
    --Input-background: #ebebeb;
}

body{
    background-color: var(--Body-background)
}
`
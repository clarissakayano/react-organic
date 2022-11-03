import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body #root {
        min-height: 100vh;

    }

    h5, h3 {
        font-family: 'Playfair Display', serif;
        font-family: 'Roboto', sans-serif;
        list-style: none;
    }

    /* unvisited link */
    a:link {
    color:  #333;
    text-decoration: none;
    }

    /* visited link */
    a:visited {
    color:  #333;
    }

    /* mouse over link */
    a:hover {
    color: blue;
    }

    /* selected link */
    a:active {
    color: #0000FF;
    }

`;
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    list-style: none;
    text-decoration:none;
  }

  :root {
    --primary0: #f5f7fa;
    --primary100: #f7f9fa;
    --primary200: #ffffff;
    --primary_text0: #2b2b2b;
    --primary_text100: #6b6b6b;
    --primary_text200: #d2d2d2;
    --secundary_text0: #447abe;
    --secundary_text100: #609eec;
  }

  body {
    background-color: var(--primary0);
  }

  button, div, label, select, h1, h2, h3, h4, h5, h6 {
  color: var(--primary_text100);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  input{
    color: var(--primary_text0);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
`;

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
    */

    html,
    body,
    div,
    span,
    applet,
    object,
    iframe,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    blockquote,
    pre,
    a,
    abbr,
    acronym,
    address,
    big,
    cite,
    code,
    del,
    dfn,
    em,
    img,
    ins,
    kbd,
    q,
    s,
    samp,
    small,
    strike,
    strong,
    sub,
    sup,
    tt,
    var,
    b,
    u,
    i,
    center,
    dl,
    dt,
    dd,
    ol,
    ul,
    li,
    fieldset,
    form,
    label,
    legend,
    table,
    caption,
    tbody,
    tfoot,
    thead,
    tr,
    th,
    td,
    article,
    aside,
    canvas,
    details,
    embed,
    figure,
    figcaption,
    footer,
    header,
    hgroup,
    menu,
    nav,
    output,
    ruby,
    section,
    summary,
    time,
    mark,
    audio,
    video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    hgroup,
    menu,
    nav,
    section {
    display: block;
    }
    body {
    line-height: 1;
    }
    ol,
    ul {
    list-style: none;
    }
    blockquote,
    q {
    quotes: none;
    }
    blockquote:before,
    blockquote:after,
    q:before,
    q:after {
    content: "";
    content: none;
    }
    table {
    border-collapse: collapse;
    border-spacing: 0;
    }

    * {
      box-sizing: border-box;
      transition: all 0.2s linear;
      scroll-behavior: smooth;
      --white: #F2F2F2;
      --light-gray: #DFDFDF;
      --dark-gray: #808080;
      --black: #210123;
      --primary: #6C043C;
      --secondary: #0EC0C1;
      --red: #EB4335;
    }

    /* My styles */
    body {
      min-height: 100vh;
      font-size: 1rem;
      line-height: 1.1rem;
      font-weight: 400;
      font-style: normal;
      font-family: "Roboto", sans-serif;
      color: var(--black);
      background-color: var(--white);
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    #root {
      height: 100%
    }

    main {
      width: 100%;
      height: 100%;
	    max-width: 700px;
      padding: 65px 0 0;
    }

    @media (max-width: 500px) {
      main {
        padding: 65px 0;
      }
    }
`;

export { GlobalStyle };

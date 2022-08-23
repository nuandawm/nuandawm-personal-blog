import { createGlobalStyle, css } from "styled-components";

const Colors = css`
  :root {
    /* Blue 50 material palette */
    --color-primary-100: #BBDEFB;
    --color-primary-200: #90CAF9;
    --color-primary: #61dafb;
    --color-primary-400: #42A5F5;
    --color-primary-500: #2196F3;
    --color-primary-600: #1E88E5;
    --color-primary-700: #1976D2;
    --color-primary-800: #1565C0;
    --color-primary-900: #0D47A1;

    --color-grey-100: #f7f7f7;
    --color-grey-200: #dbdbdb;
    --color-grey-300: #c0c0c0;
    --color-grey-400: #adadad;
    --color-grey-500: #9a9a9a;
    --color-grey-600: #6e6e6e;
    --color-grey-700: #414141;
    --color-grey-800: #2e2e2e;
    --color-grey-900: #1a1a1a;

    --color-text: #000000;
    --color-inverted-text: #ffffff;
    --color-background: #ffffff;
    --color-inverted-background: #212121;
  }
`;

const Color = createGlobalStyle`
    ${Colors}
`;

export default Color;

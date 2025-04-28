import { css } from '@emotion/react';
import emotionReset from 'emotion-reset';

const globalStyles = css`
  ${emotionReset}

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html {
    font-size: 62.5%;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    overflow: auto;

    /* 스크롤바 숨기기 */
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE and Edge */
  }
  body::-webkit-scrollbar {
    display: none; /* Chrome, Safari */
  }

  body {
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000;
  }

  button {
    border: none;
    cursor: pointer;
    background: none;
  }
`;

export default globalStyles;

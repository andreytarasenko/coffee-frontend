import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    /***
      The new CSS reset - version 1.8.2 (last updated 23.12.2022)
      GitHub page: https://github.com/elad2412/the-new-css-reset
    ***/

  *:where(:not(html, iframe, canvas, img, svg, video, audio):not(svg *, symbol *)) {
      all: unset;
      display: revert;
  }

  *,
  *::before,
  *::after {
      box-sizing: border-box;
  }

  a, button {
      cursor: revert;
  }

  ol, ul, menu {
      list-style: none;
  }

  img {
      max-inline-size: 100%;
      max-block-size: 100%;
  }

  table {
      border-collapse: collapse;
  }

  input, textarea {
      -webkit-user-select: auto;
      user-select: auto;
  }

  textarea {
      white-space: revert;
  }

  meter {
      -webkit-appearance: revert;
      appearance: revert;
  }

  pre {
      all: revert;
  }

  ::placeholder {
      color: unset;
  }

  ::marker {
      content: "";
  }

  :where([hidden]) {
      display: none;
  }

  :where([contenteditable]:not([contenteditable="false"])) {
      -moz-user-modify: read-write;
      -webkit-user-modify: read-write;
      overflow-wrap: break-word;
      -webkit-line-break: after-white-space;
      line-break: after-white-space;
      -webkit-user-select: auto;
      user-select: auto;
  }

  :where([draggable="true"]) {
      -webkit-user-drag: element;
  }

  :where(dialog:modal) {
      all: revert;
  }
`;

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import App from './App';
import './index.css';

export const GlobalStyle = createGlobalStyle`
  ${normalize}
 `

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



import './assets/general.css'
import './assets/normalize.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import FootSection from './components/footer/footer';
import HeaderSection from './components/header/header';
import styled from 'styled-components'

const APPLICATION = styled.div`
max-width: 1080px;
background-color: lightgray;
margin: 0 auto;
overflow-x: hidden;
min-height: 100vh;
`
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <APPLICATION>
      <HeaderSection />
      <App />
      <FootSection />
    </APPLICATION>
  </React.StrictMode>
);

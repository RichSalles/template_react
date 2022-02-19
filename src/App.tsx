import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';


import './assets/sass/global.scss'

import Routes from './routes';


function App() {
  return (
    <div className="App">
      <I18nextProvider i18n={i18n}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </I18nextProvider>
      
    </div>
  );
}

export default App;
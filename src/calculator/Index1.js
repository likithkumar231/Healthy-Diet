import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App1 from './App1';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App1/>
  </React.StrictMode>,
  document.getElementById('app')
);

serviceWorker.register();

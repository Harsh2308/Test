import React from 'react';
import ReactDOM, { hydrate } from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { render } from '@testing-library/react';


const MyApp = () => (
  <React.StrictMode>
    <App />
  </React.StrictMode>
)


const rootElement = document.getElementById('root')
if (rootElement.hasChildNodes()) {
  hydrate(<MyApp />, rootElement)
} else {
  render(<MyApp />, rootElement)
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

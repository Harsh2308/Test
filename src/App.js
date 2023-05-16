import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Helmet } from 'react-helmet'

function App() {
  return (
    <>
      <Helmet>
        <title>Title with React Helmet</title>
        <meta name="description" content="Dynamic title page with React Helmet" />
      </Helmet>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            dynamic title page with <code>React Helmet</code>
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
      </div>
    </>
  );
}

export default App;

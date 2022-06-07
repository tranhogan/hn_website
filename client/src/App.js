import logo from './logo.svg';
import './App.css';
import React from 'react';
import Button from 'react-bootstrap/Button'

import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <nav>
          <Link to="/calendar">Calendar</Link>
        </nav>
      </header>
    </div>
  );
}

// function Hello() {
  
// }

export default App;

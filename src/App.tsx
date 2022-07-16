import React from 'react';
// import logo from './logo.svg';
import './App.css';
import  ParallaxHorizontalScrollPage from './components/home/ParallaxHorizontalScrollPage';
import NavBar from "./components/NavBar";
// import { ScrollSkew } from './components/ScrollSkew';

function App() {
  return (
    <div className="App">
      {/* <ParallaxHorizontalScrollPage /> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <div className="main-area">
        <NavBar />
      <ParallaxHorizontalScrollPage />

      </div>


      {/* <ScrollSkew /> */}
    </div>
  );
}

export default App;

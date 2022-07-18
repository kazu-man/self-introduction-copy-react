import React from 'react';
// import logo from './logo.svg';
import './App.css';
import  ParallaxHorizontalScrollPage from './components/home/ParallaxHorizontalScrollPage';
import Loading from './components/loading/Loading';
import NavBar from "./components/NavBar";
// import { ScrollSkew } from './components/ScrollSkew';
function App() {
  return (
    <div className="App">
      <Loading/>
      <div className="main-area">
        <NavBar />
      <ParallaxHorizontalScrollPage />

      </div>


      {/* <ScrollSkew /> */}
    </div>
  );
}

export default App;

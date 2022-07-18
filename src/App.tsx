import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Home from './components/home/Home';
import About from './components/pages/About';
import {BrowserRouter,Route,Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
        
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About/>}></Route>
          
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;

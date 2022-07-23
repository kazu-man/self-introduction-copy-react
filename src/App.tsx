import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Home from './components/home/Home';
import About from './components/pages/About/About';
import Work from './components/pages/Work/Work';
import {BrowserRouter,Route,Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
        
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/work/:id" element={<Work/>}></Route>
          
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;

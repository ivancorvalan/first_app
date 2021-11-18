import React from 'react';
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import Printers from './Components/Screens/Printers/Printers';
import Home from './Components/Screens/Home/Home';
import MFP from './Components/Screens/MFP/MFP';
import {home} from './Components/DatabaseItems/DataBaseHome'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home tittle={home[0].tittle} text={home[0].text}/>}/>
          <Route path="/printers" element={<Printers />} />
          <Route path="/mfp" element={<MFP />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App
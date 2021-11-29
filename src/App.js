import React from 'react';
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import './App.css';
import ItemListContainer from './Components/itemListContainer/itemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import Home from './Components/Screens/Home/Home';
import {home} from './Components/Database/DataBaseHome'

function App() {
  return (
    <div className="App"> 
    <BrowserRouter>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home tittle={home.tittle} text={home.text}/>}/>
        <Route path="/category/:catId" element={<ItemListContainer />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        <Route path="/cart" element={""} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App
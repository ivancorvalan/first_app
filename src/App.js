import React from 'react';
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import './App.css';
import ItemListContainer from './Components/itemListContainer/itemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import Cart from './Components/Cart/Cart'
import Home from './Components/Screens/Home/Home';
import CartContext from './Context/CartContext';
import LoginContext from './Context/LoginContext';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';

function App() {
  return (
    <div className="App">
      <LoginContext>
        <CartContext>
          <BrowserRouter>
            <Header />
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/category/:catId" element={<ItemListContainer />} />
              <Route path="/item/:itemId" element={<ItemDetailContainer />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </BrowserRouter>
        </CartContext>
      </LoginContext>
    </div>
  );
}

export default App
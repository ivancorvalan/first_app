import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import ItemListContainer from './Components/itemListContainer/itemListContainer';

function App() {
  return (
    < React.Fragment>
      <Header />
      <Navbar />
      <ItemListContainer />
    </React.Fragment>
  );
}

export default App
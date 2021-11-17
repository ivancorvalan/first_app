import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import ItemListContainer from './Components/itemListContainer/itemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    < React.Fragment>
    <div className="App">
        <Header />
        <Navbar />
        <ItemListContainer tittle="
They are not just printers, they are solutions" text="Lorem"/>
        <ItemDetailContainer />
      </div>
    </React.Fragment>
  );
}

export default App
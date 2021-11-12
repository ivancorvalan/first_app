import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import ItemListContainer from './Components/itemListContainer/itemListContainer';

function App() {
  return (
    < React.Fragment>
    <div className="App">
        <Header />
        <Navbar />
        <ItemListContainer tittle="
They are not just printers, they are solutions" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet amet eligendi velit praesentium rem? Totam soluta, minima quae inventore, ea, aut hic tempora ducimus ex quis laborum a cupiditate. Repellat?"/>
      </div>
    </React.Fragment>
  );
}

export default App
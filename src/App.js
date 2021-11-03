import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import Body from './Components/Body/Body';

function App() {
  return (
    < React.Fragment>
      <Header />
      <Navbar />
      <Body />
    </React.Fragment>
  );
}

export default App
import React from 'react';
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Screens/Home/Home';
/*import LoginContext from './Context/LoginContext';
import InboxContext from './Context/InboxContext';*/
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Services from './Components/Services/Services';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Inbox from './Components/Inbox/Inbox';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  return (
    <div className="App">
      {/*<LoginContext>
        <InboxContext>*/}
            <BrowserRouter>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/service" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/inbox" element={<Inbox />} />
              </Routes>
              <Footer />
            </BrowserRouter>
        {/*</InboxContext>
      </LoginContext>*/}
    </div>
  );
}

export default App
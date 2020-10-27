import React from 'react';
import logo from './logo.svg';
import { Navbar,NavbarBrand } from 'reactstrap';
import './App.css';


function App() {
  return (
    <div className="App">
   
     <Navbar dark color="primary">
       <div className="container"></div>
       <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
     </Navbar>
  
    </div>
  );
}

export default App;

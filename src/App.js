import React from 'react';
import logo from './logo.svg';
import { Navbar,NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponents';
import './App.css';
 


function App() {
  return (
    <div >
   
     <Navbar dark color="primary">
       <div className="container"></div>
       <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
     </Navbar>
  <Menu/>
    </div>
  );
}

export default App;

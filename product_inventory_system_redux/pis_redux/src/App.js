import React from 'react';
import './App.css';
//import AllProducts from './containers/AllProducts';
import { HashRouter } from 'react-router-dom';
import Nav from './header/Nav';


function App() {
  return (
    <div className="App">
       <HashRouter>
        <Nav></Nav>
       {/* <AllProducts></AllProducts> */}
       </HashRouter>
    </div>
  );
}

export default App;

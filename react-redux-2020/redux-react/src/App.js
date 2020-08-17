import React from 'react';
//import logo from './logo.svg';

import './App.css';
import FirstnameContainer from './containers/FirstnameContainer';
import LastnameContainer from './containers/LastnameContainer';

function App() {
  return (
    <div>
          <h1>Hello Welcome To redux!</h1>
          <div>
          <FirstnameContainer> </FirstnameContainer>
          <LastnameContainer></LastnameContainer>
          </div>
         
    </div>
  );
}

export default App;

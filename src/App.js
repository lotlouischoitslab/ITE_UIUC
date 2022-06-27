import React from 'react';
import Navbar from './components/Navbar'
import Home from './components/Home';
import About from './components/About';
import Team from './components/Team';
import Contact from './components/Contact';
import {Route,Link} from 'react-router-dom';


function App() {
  return (
    <div>
      <Navbar/>
      {/* <Route to= '/home' components={Home} /> */}
      
    </div>
  );
}

export default App;

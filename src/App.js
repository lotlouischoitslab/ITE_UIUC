import React from 'react';
import Navbar from './components/Navbar'
import Home from './components/Home';
import About from './components/About';
import Team from './components/Team';
import Contact from './components/Contact';


function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Team/>
      <Contact/>
      
    </div>
  );
}

export default App;

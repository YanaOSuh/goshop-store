import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Home from './Home';
import Contact from './Contact';
import Sale from './Sale';
import Hero from './Hero';
import AboutProduct from './AboutProduct';

function App() {
  return (
  <Router>
    <nav>
      <Link to='/' className='linkMain'><span className='shopName'>GO</span>SHOP</Link>
      <Link to='/hero' className='link'>Home</Link>
      <Link to='/sale' className='link'>Sale</Link>
      <Link to='/contact' className='link'>Contact</Link>
    </nav>

    <Routes>
      <Route path='/' element = {<Home />}/>
      <Route path='/hero' element={<Hero />}/>
      <Route path='/sale' element = {<Sale />}/>
      <Route path='/contact' element = {<Contact />} />
      <Route path='/about/:title' element={<AboutProduct />} />
    </Routes>
    </Router>
  );
}

export default App;

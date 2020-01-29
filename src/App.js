import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import { Home, About, Contact, Navigation } from './components';

const App = () => (
  <div>
    <Home />
    <About />
    <Contact />
    <Navigation />
  </div>
);

export default App;

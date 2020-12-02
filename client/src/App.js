import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/pages/home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Cards from '../cards';

function App() {
  return (
    <>
    <Router>

      <Switch>
      <Route path='/' cards component={Cards} />
       </Switch>
      </Router>
    </>
   );
  }

export default App;

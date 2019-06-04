import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './class/Home';
import Login from './class/Login';
import { Header } from './common/Header';
import { Footer } from './common/Footer';
// import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

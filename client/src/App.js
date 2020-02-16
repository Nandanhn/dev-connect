import React, { Fragment } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar'
import Landing from './components/layout/Landing'
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom'
import Login from './components/auth/Login'
import Register from './components/auth/Register'

const App =() => (
  <Router>
    <Fragment>
      <h1>App</h1>
      <Navbar />
      <Route exact path="/" component={Landing}/>
      <section className="container">
        <Switch>
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
        </Switch>
      </section>
    </Fragment>
  </Router> 
  
);
    


export default App;

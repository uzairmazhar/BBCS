import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Login from './components/pages/Login';
import Logout from './components/pages/Logout';
import profile from './components/pages/backend/profile'
import Upload2 from './components/pages/backend/uploadImages2'
import Admin from './components/pages/backend/adminPanel'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/login' component={Login} />
          <Route path='/logout' component={Logout} />
          <Route path='/profile' component={profile} />
          <Route path='/uploadImages2' component={Upload2} />
          <Route path='/admin' component={Admin} />

        </Switch>
      </Router>
    </>
  );
}

export default App;

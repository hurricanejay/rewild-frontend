  
import React from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import Main from './containers/main'
import Shop from './containers/shop'
import Navbar from './components/navbar';
import Login from './components/logIn';
import Signup from './components/signup';
import PlantInfo from './components/plantInfo'

function App(props) {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path="/" component={(routerProps) => <Main {...routerProps} />} />
        <Route exact path="/shop" component={(routerProps) => <Shop {...routerProps} />} />
        <Route exact path="/login" component={(routerProps) => <Login {...routerProps} />} />
        <Route exact path="/signup" component={(routerProps) => <Signup {...routerProps} />} />
        <Route exact path="/plants/:id" component={(routerProps) => <PlantInfo {...routerProps} />} />
        <Route render={() => <Redirect to="/" />} />
      </Switch>
    </div>
  );
}

export default App;

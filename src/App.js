  
import React from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import Main from './containers/main'
import Shop from './containers/shop'

function App(props) {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={(routerProps) => <Main {...routerProps} />} />
        <Route exact path="/shop" component={(routerProps) => <Shop {...routerProps} />} />
        <Route render={() => <Redirect to="/" />} />
      </Switch>
    </div>
  );
}

export default App;

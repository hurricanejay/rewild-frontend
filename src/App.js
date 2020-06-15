  
import React from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import Main from './containers/main'
import Second from './containers/second'

function App(props) {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={(routerProps) => <Main {...routerProps} />} />
        <Route path="/second" component={(routerProps) => <Second {...routerProps} />} />
        <Route render={() => <Redirect to="/" />} />
      </Switch>
    </div>
  );
}

export default App;

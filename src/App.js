
import React, { useEffect, useState } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import Main from './containers/main'
import Shop from './containers/shop'
import Navbar from './components/navbar';
import Login from './components/logIn';
import Signup from './components/signup';
import PlantInfo from './components/plantInfo'
import MyPlants from './containers/myPlants'
import SearchResults from './containers/searchResults';
import PaymentForm from './components/paymentForm';

function App(props) {

  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    let sqPaymentScript = document.createElement('script');
    sqPaymentScript.src = "https://js.squareup.com/v2/paymentform";
    sqPaymentScript.type = "text/javascript"
    sqPaymentScript.async = false;
    sqPaymentScript.onload = () => { setLoaded(true) };
    document.getElementsByTagName("head")[0].appendChild(sqPaymentScript);
  }, [])


  return (
    <div className="App">
      {loaded &&
        <PaymentForm
          paymentForm={window.SqPaymentForm} />
      }

      <Navbar />
      <Switch>
        <Route exact path="/" component={(routerProps) => <Main {...routerProps} />} />
        <Route exact path="/shop" component={(routerProps) => <Shop {...routerProps} />} />
        <Route exact path="/login" component={(routerProps) => <Login {...routerProps} />} />
        <Route exact path="/signup" component={(routerProps) => <Signup {...routerProps} />} />
        <Route exact path="/plants/:id" component={(routerProps) => <PlantInfo {...routerProps} />} />
        <Route exact path="/my_plants" component={(routerProps) => <MyPlants {...routerProps} />} />
        <Route exact path="/search/:search" component={(routerProps) => <SearchResults {...routerProps} />} />
        <Route render={() => <Redirect to="/" />} />
      </Switch>
    </div>
  );
}

export default App;

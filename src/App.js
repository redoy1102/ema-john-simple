import React, { createContext } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
//import react router start
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
import ProductKey from './components/ProductKey/ProductKey';
import Login from './components/Login/Login';
import Shipment from './components/Shipment/Shipment';
import { useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
//import react router end

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
      {/* <h3>E-mail: {loggedInUser.email}</h3> */}
      <Header></Header>
      <Router>
        <Switch>
          
          <Route path="/shop">
          <Shop></Shop>
          </Route>

          <Route path="/login">
          <Login></Login>
          </Route>

          <PrivateRoute path="/shipment">
          <Shipment></Shipment>
          </PrivateRoute>

          <Route path="/review"> 
          <Review></Review>
          </Route>

          <PrivateRoute path="/inventory">
            <Inventory></Inventory>
          </PrivateRoute>

          <Route path="/product/:productKey">
            <ProductKey></ProductKey>
          </Route>

          <Route exact path="*" >
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
      
    </UserContext.Provider>
  );
}

export default App;

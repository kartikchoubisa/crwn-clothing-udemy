import React from 'react';
import { HomePage } from './pages/homepage/homepage.components.jsx'
import {ShopPage} from "./pages/shop/shop.components";
import './App.css'

import {Route, Switch} from "react-router-dom";


function App() {
  return (
    <div >
        <Switch>
            <Route exact path = "/" component = {HomePage}/>
            <Route exact path = "/shop" component = {ShopPage}/>
        </Switch>
    </div>
  );
}

export default App;


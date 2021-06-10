import React from 'react';
import { HomePage } from './pages/homepage/homepage.components.jsx'
import './App.css'

import {Route, Switch} from "react-router-dom";
import {ShopPage} from "./pages/shoppage/shoppage.components.jsx";

const HatsPage = (props) => {
    console.log(props);
    return (<div>
        <h1>HATS PAGE</h1>
    </div>)
}

function App() {
  return (
    <div >
        <Switch>
            <Route exact path = "/" component = {HomePage}/>
            <Route exact path = "/shop" component = {ShopPage}/>
            <Route exact path = "/shop/hats" component = {HatsPage}/>
        </Switch>
    </div>
  );
}

export default App;


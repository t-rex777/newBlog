import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Hello from './pages/Hello';
import Home from './pages/Home';


const Routes = () => {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Hello" exact component={Hello} />
          
        </Switch>
      </BrowserRouter>
    );
  };
  
  export default Routes;
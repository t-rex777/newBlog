import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Hello from './pages/Hello';
import Home from './pages/Home';
import Post_1 from './pages/Post_1';
import Health from "./pages/Health/Health"
import ReactWorking from './pages/Code/ReactWorking';
import Tech from "./pages/Tech/Tech"


const Routes = () => {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/health" exact component={Health} />
          <Route path="/tech" exact component={Tech} />
          <Route path="/hello" exact component={Hello} />
          <Route path="/health/post_1" exact component={Post_1} />
          <Route path="/tech/react" exact component={ReactWorking} />
        </Switch>
      </BrowserRouter>
    );
  };
  
  export default Routes;